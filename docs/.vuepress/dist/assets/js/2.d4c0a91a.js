(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{295:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"i",function(){return r}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return c}),n.d(e,"b",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"k",function(){return d}),n.d(e,"l",function(){return f}),n.d(e,"c",function(){return g}),n.d(e,"j",function(){return v});n(173),n(318),n(36),n(47),n(69),n(67),n(323),n(296),n(68);var i=/#.*$/,s=/\.(md|html)$/,a=/\/$/,r=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return r.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",s=o(t);return a.test(s)?t:s+".html"+n}function p(t,e){var n=t.hash,s=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var a=t.replace(/^\//,"").split("/"),r=0;r<a.length;r++){var o=a[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=o(e),s=0;s<t.length;s++)if(o(t[s].regularPath)===i)return Object.assign({},t[s],{type:"page",path:h(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var s=n.pages,a=n.themeConfig,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var o=r.sidebar||a.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),u=l.base,c=l.config;return c?c.map(function(t){return function t(e,n,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var a=e.children||[];return 0===a.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(function(e){return t(e,n,i,s+1)}),collapsable:!1!==e.collapsable}}(t,s,u)}):[]}return[]}function g(t){var e;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},296:function(t,e,n){"use strict";var i=n(11),s=n(29),a=n(170),r=n(171);n(172)("match",1,function(t,e,n,o){return[function(n){var i=t(this),s=null==n?void 0:n[e];return void 0!==s?s.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var l=i(t),u=String(this);if(!l.global)return r(l,u);var c=l.unicode;l.lastIndex=0;for(var h,p=[],d=0;null!==(h=r(l,u));){var f=String(h[0]);p[d]=f,""===f&&(l.lastIndex=a(u,s(l.lastIndex),c)),d++}return 0===d?null:p}]})},297:function(t,e,n){},298:function(t,e,n){},299:function(t,e,n){},300:function(t,e,n){},301:function(t,e,n){},302:function(t,e,n){},303:function(t,e,n){},304:function(t,e,n){},305:function(t,e,n){},306:function(t,e,n){},307:function(t,e,n){},308:function(t,e,n){},309:function(t,e,n){},318:function(t,e,n){var i=n(2);i(i.S,"Array",{isArray:n(174)})},319:function(t,e,n){"use strict";n.r(e);n(168);var i=n(295),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(320).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(319).default},methods:{isActive:i.e}},a=(n(336),n(28)),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(67),n(337);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,s,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var u=Object(i.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u),l(t,e.children,n,s,a,r+1)])}))}var u={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,s=n.$page,a=(n.$site,n.$route),r=n.$themeConfig,u=n.$themeLocaleConfig,c=e.props,h=c.item,p=c.sidebarDepth,d=Object(i.e)(a,h.path),f="auto"===h.type?d||h.children.some(function(t){return Object(i.e)(a,h.basePath+"#"+t.slug)}):d,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),v=[s.frontmatter.sidebarDepth,p,u.sidebarDepth,r.sidebarDepth,1].find(function(t){return void 0!==t}),m=u.displayAllHeaders||r.displayAllHeaders;return"auto"===h.type?[g,l(t,h.children,h.basePath,a,v)]:(f||m)&&h.headers&&!i.d.test(h.path)?[g,l(t,Object(i.c)(h.headers),h.path,a,v)]:g}};n(338);var c={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var s=e[n];if("group"===s.type&&s.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(a.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},320:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(331),n(28)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=a.exports},321:function(t,e,n){"use strict";n(322)("link",function(t){return function(e){return t(this,"a","href",e)}})},322:function(t,e,n){var i=n(2),s=n(10),a=n(30),r=/"/g,o=function(t,e,n,i){var s=String(a(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},323:function(t,e,n){"use strict";var i=n(169),s=n(11),a=n(324),r=n(170),o=n(29),l=n(171),u=n(114),c=n(10),h=Math.min,p=[].push,d=!c(function(){RegExp(4294967295,"y")});n(172)("split",2,function(t,e,n,c){var f;return f="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(s,t,e);for(var a,r,o,l=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?4294967295:e>>>0,f=new RegExp(t.source,c+"g");(a=u.call(f,s))&&!((r=f.lastIndex)>h&&(l.push(s.slice(h,a.index)),a.length>1&&a.index<s.length&&p.apply(l,a.slice(1)),o=a[0].length,h=r,l.length>=d));)f.lastIndex===a.index&&f.lastIndex++;return h===s.length?!o&&f.test("")||l.push(""):l.push(s.slice(h)),l.length>d?l.slice(0,d):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var s=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,s,i):f.call(String(s),n,i)},function(t,e){var i=c(f,t,this,e,f!==n);if(i.done)return i.value;var u=s(t),p=String(this),g=a(u,RegExp),v=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(d?"y":"g"),b=new g(d?u:"^(?:"+u.source+")",m),_=void 0===e?4294967295:e>>>0;if(0===_)return[];if(0===p.length)return null===l(b,p)?[p]:[];for(var k=0,x=0,$=[];x<p.length;){b.lastIndex=d?x:0;var C,y=l(b,d?p:p.slice(x));if(null===y||(C=h(o(b.lastIndex+(d?0:x)),p.length))===k)x=r(p,x,v);else{if($.push(p.slice(k,x)),$.length===_)return $;for(var w=1;w<=y.length-1;w++)if($.push(y[w]),$.length===_)return $;x=k=C}}return $.push(p.slice(k)),$}]})},324:function(t,e,n){var i=n(11),s=n(111),a=n(3)("species");t.exports=function(t,e){var n,r=i(t).constructor;return void 0===r||null==(n=i(r)[a])?e:s(n)}},325:function(t,e,n){"use strict";var i=n(297);n.n(i).a},326:function(t,e,n){"use strict";var i=n(298);n.n(i).a},327:function(t,e,n){"use strict";n(179)("trim",function(t){return function(){return t(this,3)}})},328:function(t,e,n){"use strict";var i=n(299);n.n(i).a},329:function(t,e,n){"use strict";var i=n(300);n.n(i).a},330:function(t,e,n){var i=n(8),s=n(115),a=n(13).f,r=n(113).f,o=n(169),l=n(177),u=i.RegExp,c=u,h=u.prototype,p=/a/g,d=/a/g,f=new u(p)!==p;if(n(12)&&(!f||n(10)(function(){return d[n(3)("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")}))){u=function(t,e){var n=this instanceof u,i=o(t),a=void 0===e;return!n&&i&&t.constructor===u&&a?t:s(f?new c(i&&!a?t.source:t,e):c((i=t instanceof u)?t.source:t,i&&a?l.call(t):e),n?this:h,u)};for(var g=function(t){t in u||a(u,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},v=r(c),m=0;v.length>m;)g(v[m++]);h.constructor=u,u.prototype=h,n(21)(i,"RegExp",u)}n(178)("RegExp")},331:function(t,e,n){"use strict";var i=n(301);n.n(i).a},332:function(t,e,n){"use strict";var i=n(302);n.n(i).a},333:function(t,e,n){"use strict";var i=n(303);n.n(i).a},334:function(t,e,n){"use strict";var i=n(304);n.n(i).a},335:function(t,e,n){"use strict";var i=n(305);n.n(i).a},336:function(t,e,n){"use strict";var i=n(306);n.n(i).a},337:function(t,e,n){"use strict";var i=n(2),s=n(48)(5),a=!0;"find"in[]&&Array(1).find(function(){a=!1}),i(i.P+i.F*a,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(112)("find")},338:function(t,e,n){"use strict";var i=n(307);n.n(i).a},339:function(t,e,n){"use strict";var i=n(308);n.n(i).a},340:function(t,e,n){"use strict";var i=n(309);n.n(i).a},353:function(t,e,n){"use strict";n.r(e);n(47),n(110),n(168),n(321);var i=n(295),s={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},a=n(28),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,o={components:{NavLink:r},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(325),n(326),Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),n("div",{staticStyle:{height:"300px"}}),t._v(" "),n("div",{staticStyle:{height:"300px"}}),t._v(" "),n("div",{staticStyle:{height:"300px"}}),t._v(" "),n("div",{staticStyle:{height:"300px"}}),t._v(" "),n("div",{staticStyle:{height:"300px"}}),t._v(" "),n("div",{staticStyle:{height:"300px"}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,"57b6b836",null).exports),u=(n(296),n(36),n(318),n(173),n(327),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=5);a++){var r=e[a];if(this.getPageLocalePath(r)===n&&this.isSearchable(r))if(i(r))s.push(r);else if(r.headers)for(var o=0;o<r.headers.length&&!(s.length>=5);o++){var l=r.headers[o];i(l)&&s.push(Object.assign({},r,{path:r.path+"#"+l.slug,header:l}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),c=(n(328),Object(a.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),h=(n(329),Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),p=(n(330),n(64)),d=(n(68),n(67),{components:{NavLink:r,DropdownTransition:n(320).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),f=(n(332),{components:{NavLink:r,DropdownLink:Object(a.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(a){var r,o=e[a],l=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,a),i.some(function(t){return t.path===r})||(r=a)),{text:l,link:r}})};return[].concat(Object(p.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),g=(n(333),Object(a.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function v(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:h,NavLinks:g,SearchBox:c,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(v(this.$el,"paddingLeft"))+parseInt(v(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},githubLink:function(){return this.$themeConfig.github||{}}}},b=(n(334),Object(a.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle&&!t.$site.themeConfig.logo?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),n("a",{staticClass:"can-hide",staticStyle:{display:"flex","align-items":"center","margin-left":"10px"},attrs:{href:t.githubLink}},[n("img",{staticClass:"my-svg",staticStyle:{width:"1.4rem",height:"1.4rem"},attrs:{src:t.$withBase("/svg/github.svg"),type:"image/svg+xml"}})])],1)],1)},[],!1,null,null,null).exports);function _(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[s+n]}}var k={props:["sidebarItems"],computed:{isBlog:function(){return!!this.$page.frontmatter.tag&&("blog"==this.$page.frontmatter.tag||"blog"==this.$page.frontmatter.tag[0])},showFooter:function(){return!this.$page.frontmatter.hideFooter},lastUpdated:function(){return!this.$page.frontmatter.hideLastUpdated&&this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,_(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,_(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,a=t.docsBranch,r=void 0===a?"master":a,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,s,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,s,a){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+a}}},x=(n(335),Object(a.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("div",{staticClass:"my-title-box"},[t.isBlog?n("h3",{staticClass:"my-title"},[t._v(t._s(this.$page.title))]):t._e(),t._v(" "),this.$page.frontmatter.tag?n("div",{staticStyle:{"text-align":"center"}},t._l(this.$page.frontmatter.tag,function(e){return n("el-tag",{staticStyle:{margin:"5px"},attrs:{size:"small"}},[t._v(t._s(e))])}),1):t._e()]),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),t.showFooter?n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]):t._e(),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),$={name:"Sidebar",components:{SidebarLinks:n(319).default,NavLinks:g},props:["items"]},C=(n(339),{components:{Home:l,Page:x,Sidebar:Object(a.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:b},data:function(){return{isSidebarOpen:!1,scrollFlag:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar,"my-layout-container":this.$page.frontmatter.home},t]},navClasses:function(){return[{"my-nav-home":this.$page.frontmatter.home&&!this.scrollFlag,"my-nav":!this.$page.frontmatter.home||this.scrollFlag}]}},mounted:function(){var t=this;window.addEventListener("scroll",this.myScroll),this.$router.afterEach(function(){t.isSidebarOpen=!1})},destroyed:function(){window.removeEventListener("scroll",this.myScroll)},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},myScroll:function(){var t=document.getElementById("my-bg").offsetHeight,e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=e,this.scrollTop>t?this.scrollFlag=!0:this.scrollFlag=!1}}}),y=(n(340),Object(a.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[n("el-backtop"),t._v(" "),n("div",{class:{"my-bg-home":t.$page.frontmatter.home},attrs:{id:"my-bg"}}),t._v(" "),t.shouldShowNavbar?n("Navbar",{class:{"my-nav-home":t.$page.frontmatter.home&&!t.scrollFlag,"my-nav":!t.$page.frontmatter.home||t.scrollFlag},on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=y.exports}}]);