# JS 使用和基本编程

## 写代码

请完成以下文件中的编码需求：

- [查看 `clone.js`](./clone.js)
- [查看 `get-host.js`](./get-host.js)
- [查看 `get-sum.js`](./get-sum.js)

## 方法论

如果你有一定的开发经验，并且追求代码的质量。  
那么你一定知道一些实践技巧，简答 3 ～ 10 条即可。

例如：

> 面向对象编程，代码逻辑可以内聚。
> 禁止使用 var，不可变数据用 const 声明，可变数据用 let 声明。

答：

>1.添加一下精炼的注释，方便后期维护时便于理解；  
>2.在定义变量的时候应该取符合使用规范的名字，如驼峰命名等；  
>3.不要使用纯数字；  
>4.不要复制代码，适当的重构它，把它放到函数内

## 请问以下代码做了什么事情

```js
const getLoglevel = () => {
  return localStorage.loglevel ?? 'INFO';
};
```

答：返回localStorage中的loglevel，如果不存在的话返回INFO
