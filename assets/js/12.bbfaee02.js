(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{413:function(e,n,a){"use strict";a.r(n);var t=a(56),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"写这个的时候是因为我对这个逻辑跟原理相对还是比较清楚了-所以一步到位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写这个的时候是因为我对这个逻辑跟原理相对还是比较清楚了-所以一步到位"}},[e._v("#")]),e._v(" 写这个的时候是因为我对这个逻辑跟原理相对还是比较清楚了，所以一步到位")]),e._v(" "),a("h4",{attrs:{id:"_1-首先这里需要一个类-这个类是可以去收依赖-然后去通知依赖改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先这里需要一个类-这个类是可以去收依赖-然后去通知依赖改变"}},[e._v("#")]),e._v(" 1.首先这里需要一个类，这个类是可以去收依赖，然后去通知依赖改变")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Depend {\n  constructor() {\n    this.reactiveFns = new Set()\n  }\n\n  addDepend() {\n    if (activeFn) {\n      this.reactiveFns.add(activeFn)\n    }\n  }\n\n  notify() {\n    this.reactiveFns.forEach(fn => {\n      fn()\n    })\n  }\n}\n\n")])])]),a("h4",{attrs:{id:"_2-这里需要一个监听的函数-凡是被这个函数包裹的函数-参数也是函数-都会被监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-这里需要一个监听的函数-凡是被这个函数包裹的函数-参数也是函数-都会被监听"}},[e._v("#")]),e._v(" 2.这里需要一个监听的函数，凡是被这个函数包裹的函数(参数也是函数)，都会被监听")]),e._v(" "),a("p",[e._v("ps：这里跟第一步涉及到了 activeFn 了，这个后面会做解释")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let activeFn = null\nconst watchFn = fn => {\n  activeFn = fn\n  fn()\n  activeFn = null\n}\n")])])]),a("h4",{attrs:{id:"_3-为了实现不同的对象对应不同的-value-是可以单独响应-而不是改一个-value-值-然后整个对象都响应式-或者是所有对象都发生响应式-而创建一个的数据结构-这里也要返回一个-depend-以便于在后面的-proxy-中可以自动对其做一些响应式的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-为了实现不同的对象对应不同的-value-是可以单独响应-而不是改一个-value-值-然后整个对象都响应式-或者是所有对象都发生响应式-而创建一个的数据结构-这里也要返回一个-depend-以便于在后面的-proxy-中可以自动对其做一些响应式的操作"}},[e._v("#")]),e._v(" 3.为了实现不同的对象对应不同的 value 是可以单独响应，而不是改一个 value 值，然后整个对象都响应式，或者是所有对象都发生响应式，而创建一个的数据结构，这里也要返回一个 depend，以便于在后面的 proxy 中可以自动对其做一些响应式的操作")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const targeMap = new WeakMap()\n\nconst getDepend = (target, key) => {\n  let map = targeMap.get(target)\n  if (!map) {\n    map = new Map()\n    targeMap.set(target, map)\n  }\n\n  let depend = map.get(key)\n  if (!depend) {\n    depend = new Depend()\n    map.set(key, depend)\n  }\n\n  return depend\n}\n")])])]),a("h4",{attrs:{id:"_4-用-proxy-进行包裹-然后获取-depend-操作-depend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-用-proxy-进行包裹-然后获取-depend-操作-depend"}},[e._v("#")]),e._v(" 4.用 proxy 进行包裹，然后获取 depend，操作 depend")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const reactive = obj => {\n  return new Proxy(obj, {\n    get(target, key, receiver) {\n      const depend = getDepend(target, key)\n      depend.addDepend()\n      return Reflect.get(target, key, receiver)\n    },\n    set(target, key, newval, receiver) {\n      const depend = getDepend(target, key)\n      Reflect.set(target, key, newval, receiver)\n      depend.notify()\n    },\n  })\n}\n")])])]),a("h4",{attrs:{id:"_5-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试"}},[e._v("#")]),e._v(" 5.测试")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const lvqihangProxy = reactive({\n  name: "lvqihang",\n  age: 26,\n})\n\nconst ginProxy = reactive({\n  name: "gin",\n  age: 268,\n})\n\nwatchFn(() => {\n  console.log(lvqihangProxy.name, "名字初始化了～～～")\n})\n\nwatchFn(() => {\n  console.log(lvqihangProxy.name, "名字初始化了+++++～～～")\n})\n\nwatchFn(() => {\n  console.log(lvqihangProxy.age, "年龄初始化了～～～")\n})\n\nwatchFn(() => {\n  console.log(ginProxy.name, "名字初始化了～～～")\n})\n\nwatchFn(() => {\n  console.log(ginProxy.age, "年龄初始化了～～～")\n})\n\nlvqihangProxy.name = "xiaotian"\n\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);