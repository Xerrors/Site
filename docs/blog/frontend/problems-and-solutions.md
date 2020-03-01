---
title: "前端项目中所遇到的一些问题集合"
date: 2020-02-29 21:03:13
permalink: /problems-and-solutions
tag: 
 - blog
 - 前端
categories:
 - 前端
 - Note
---

开发中会遇到的问题集合，有的比较高级，有的超级基础，全部记下来了。。说到底还是基础不扎实。我在每一个遇到的问题的解决方法旁边都放了帮助我解决问题的链接。希望也可以帮助到其他人。	

## Vue 相关

### 配置代理转发

````js
module.exports = {
  devServer: {
    // 这个参数会在每次编译完成之后自动打开浏览器
    open: true,
    host: 'localhost',
    port: 8080,
    https: false, // 是否支持 https
    hotOnly: true, // 热更新（似乎没有用）
    /*
     * 以上的ip和端口是我们本机的;也就是配置之后你在浏览器里面所看到
     * 的目的 IP 地址以及端口是你的主机，也就是跨域转发的结果。
     */
      
    // 下面为需要跨域的
    proxy: { // 配置跨域
      '/api': {
        // 这里后台的地址模拟的;应该填写你们真实的后台接口
        target: 'http://xxx.xxx.xxx.xxx/v2', 
        ws: true,
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': ''// 请求的时候使用这个api就可以
        }
      }
    }
  }
}
````

PS：这里有一个很大的缺点，当你的`api`或者其他的一些配置更改之后需要重新编译，我也不知道为什么，但是事实如此，折腾了很久才知道。

> 这个的参考源我之前保存的被我弄丢了，不过网上一搜一大堆，也就不存在侵不侵权了吧。

### mount 时访问 Vuex

在使用`state`里面的数据的时候，无论是在 `data`里面使用，还是在`mounted`里面使用都会出现无法获取`state`里面数据的情况。

```js
data () {
  return {
    form: {
      avatar: this.avatar,
      account: this.name,
      collection: {
        way: '支付宝',
        account: '17685673489'
      },
      tel: this.tel
    }
  }
},
computed: {
  ...mapGetters(['avatar', 'name', 'tel'])
},
mounted () {
  this.form.avatar = this.$store.state.avatar
  this.form.account = this.$store.state.name
  this.form.tel = this.$store.state.tel
},
```

导致最终渲染结果为空。

#### 原因分析

> 参考：[vuex中的state在组件中如何监听@掘金](https://juejin.im/post/5923a3bf2f301e006b272bed)
>
> 原因是因为 `vuex`中的`state`会在某一个组件中使用，而这个状态的初始化是通过异步加载完成的。组件在渲染过程中，获取的`state`状态为空。也就是说组件在异步完成之前就已经完成渲染了，导致组件的数据没有来得及渲染。

简单来说就是当`data`在渲染的时候，`state`还是空的，所以没法获得我们想要的值。

#### 解决办法

第一种解决办法，完美解决获取数据的问题。

```js
computed: {
  ...mapGetters(['avatar', 'name', 'tel']),
  form () {
    return {
      avatar: this.avatar,
      account: this.name,
      collection: {
        way: '支付宝',
        account: '17685673489'
      },
      tel: this.tel
    }
  }
}
```

这样虽然能够解决获取数据的问题，但是由于我的使用场景是作用与表单，需要可以修改；如果采用上面所述方法的话会导致表单里面的数据无法被修改，达不到我的目的。当然，对于只需要获取数据的情况这是一个很好的解决办法。

~~第二种解决办法，我需要的方式是能够在页面加载完成之后获取一次数据，同时我后面还可以修改。好吧，我没找到好的办法，最后我采用的办法是使用`state`里面的数据显示在`input`上面的`placeholder`上面，完美解决问题。~~

第二种办法就是使用计算属性的`get`和`set`方法：

> 参考官方示例：[双向绑定的计算属性](https://vuex.vuejs.org/zh/guide/forms.html#双向绑定的计算属性) 
>
> 说实话一年多没用这个属性我都给忘记了，但是我最终还是没有采用这个办法，因为我要修改的数据很多，是一个表单，所以我还是使用了调用后端接口来获得数据。

```js
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```

### 在 js 文件中访问 vuex 的状态

这一听就是基本功不扎实，碰到这种情况，第一时间就是去[官网](https://vuex.vuejs.org/zh/guide/)，不过很遗憾，没找到。原本我记得是有的，可能官方更新给修改了（果然我还是太菜了），官网找不到那就Google呗，找到了。

> 参考：[怎么在单独的js文件中使用vuex?@segmentfault](https://segmentfault.com/q/1010000018127421)
>
> 从上面那个回答里面也能印证我的记忆是对的，之前的官方文档下面就是这个例子！！（果然还是我太菜了，官方都认为太简单给删掉了）

```js
// store.js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})

export default store

// a.js
import store from './store.js'

console.log(store.state.count) // 1
store.commit('increment')
console.log(store.state.count)// 2
```

这里需要注意的是那里的`'./store.js`是相对地址，要注意下自己的路径不要选错了'，另外如果是刚加载的时候，state里面还没有数据，如果直接调用可能会出现错误，需要进行判断是否为空之后再使用。

## 基础问题

### JavaScript 相关

很多时候就是记不住，还是保存一下方便以后来查

#### 1. 如何遍历 JS 对象

我有一个对象（其实我还真的有个对象👩），长这样：

```json
{
  "code": 1,
  "info": {
      "手机状态": ["正常进入桌面","无法开机或者进入桌面","全新未拆封"],
      "内存、存储容量": ["256G","128G","64G","32G"],
      "账号可否退出": ["可正常退出","不可退出"],
      "磨损程度": ["外壳无瑕疵","细微划痕无磕碰","磕碰掉漆、边框磨损","外壳裂缝、变形"],
      "屏幕磨损": ["完美使用无划痕","细微划痕","划伤、脱胶、小缺角","碎裂、边角破损"],
      "屏幕显示": ["完美无瑕疵","显示色差，或轻微泛黄/亮坏点","显示烧屏，或有透图/透字","显示漏液，或闪烁/横竖线/花屏"],
      "维修状况": ["无维修情况","屏幕维修","主板维修或功能故障","屏幕和主板皆有维修"]
  }
}
```

我还从来没写过这样的数据，但是既然有了也没办法啊，试着遍历一下呗！

> 摘自MDN
>
> 下面的函数接受一个对象作为参数。被调用时迭代传入对象的所有可枚举属性然后返回一个所有属性名和其对应值的字符串。:smile:

```js
var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

> 摘自MDN，[查看示例](https://interactive-examples.mdn.mozilla.net/pages/js/object-entries.html)
>
> 还可以使用`Object.entries()`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 `for...in`循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）

```js
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```