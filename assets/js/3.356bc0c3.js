(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,8,14,15],{307:function(t,n,r){"use strict";r.r(n);var e={props:["a","m"],inject:["x","Grand_x"],computed:{inputValue:{set:function(t){this.$emit("update:a",{b:{c:t}})},get:function(){return this.a.b.c}}}},a=r(46),i=Object(a.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("hr"),t._v("\r\n  child\r\n  "),r("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.$emit("update:a",{b:{c:"child"}})}}},[t._v("child")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.$emit("update:m",{n:123})}}},[t._v("change --m\r\n  ")]),t._v(" "),r("el-input",{attrs:{placeholder:""},model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}}),t._v("\r\n  "+t._s(t.a)+"---m "+t._s(t.m)+"\r\n\r\n  "),r("hr"),t._v("\r\n  x-"+t._s(t.x)+"\r\n  "),r("el-button",{attrs:{type:"primary"},on:{click:function(n){t.x.y={z:1231232313213}}}},[t._v("change -- x")]),t._v(" "),r("hr"),t._v("\r\n\r\n  Grand_x--"+t._s(t.Grand_x.x)+"\r\n  "),r("el-button",{attrs:{type:"primary"},on:{click:function(n){t.Grand_x.x={y:{z:"这是通过注入this的方式实现的改变"}}}}},[t._v("change -- x")])],1)}),[],!1,null,null,null);n.default=i.exports},308:function(t,n,r){"use strict";r.r(n);var e={inject:["x","Grand_x"]},a=r(46),i=Object(a.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("hr"),t._v(" "),r("b",[t._v(" 验证 provide 、 inject 的属性使用方式")]),t._v(" "),r("p",[t._v("x-"+t._s(t.x))]),t._v(" "),r("p",[t._v("Grand_x--"+t._s(t.Grand_x.x))]),t._v(" "),r("hr"),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("b",[this._v("x 只能收到对应自己方式改变的 x 的值,\r\n    相当于闭包，作用域只限于当前的指针内部，一旦指针 x\r\n    被破坏或则被替换，响应式就不会生效了\r\n    "),n("br"),this._v("\r\n    Grand_x.x 通过传递 this 来透传 x， 的值，不能改变单纯的 x 注入的值，应为 x\r\n    此时的引用指针已经被替换，所以会出现不同步的现象, 但是当前直接使用和 更改\r\n    Grand_x.x 都将会是响应式的\r\n  ")])}],!1,null,null,null);n.default=i.exports},310:function(t,n,r){"use strict";r.r(n);var e=r(307),a=r(308),i={components:{Child:e.default,SureInject:a.default},props:["a"]},u=r(46),l=Object(u.a)(i,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("hr"),t._v("\r\n  self\r\n  "),r("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.$emit("update:a",{b:{c:"self"}})}}},[t._v("self")]),t._v("\r\n  "+t._s(t.a)+"\r\n  "),r("Child",t._g(t._b({attrs:{a:t.a}},"Child",t.$attrs,!1),t.$listeners)),t._v(" "),r("SureInject")],1)}),[],!1,null,null,null);n.default=l.exports},337:function(t,n,r){"use strict";r.r(n);var e={inheritAttrs:!1,components:{Self:r(310).default},props:["a"]},a=r(46),i=Object(a.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("hr"),t._v("\r\n  father\r\n  "),r("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.$emit("update:a",{b:{c:"father"}})}}},[t._v("father")]),t._v("\r\n  "+t._s(t.a)+"\r\n  "),r("Self",t._g(t._b({attrs:{a:t.a}},"Self",t.$attrs,!1),t.$listeners))],1)}),[],!1,null,null,null);n.default=i.exports},370:function(t,n,r){"use strict";r.r(n);var e=r(0),a={components:{Father:r(337).default},provide:function(){return this.x=e.a.observable({y:{z:"xyz"}}),{Grand_x:this,x:this.x}},data:function(){return{a:{b:{c:"132132"}},x:{y:{z:"546546"}},m:{n:"4565"}}}},i=r(46),u=Object(i.a)(a,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("hr"),t._v("\r\n  GrandFather\r\n  "),r("el-button",{attrs:{type:"primary"},on:{click:function(n){t.a=t.$options.data().a,t.m=t.$options.data().m,t.x.y=t.$options.data().x.y}}},[t._v("reset")]),t._v(" "),t._v("\r\n\r\n  x---"+t._s(t.x)+"\r\n  "),r("Father",{attrs:{a:t.a,m:t.m},on:{"update:a":function(n){t.a=n},"update:m":function(n){t.m=n}}})],1)}),[],!1,null,null,null);n.default=u.exports}}]);