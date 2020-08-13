// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// * ---------------- 解决下文中缺少 clone 函数的问题……
// 在这里写代码……

function clone(obj){
	var newJsonObj = {};
	newJsonObj = JSON.parse(JSON.stringify(obj));
	for (items in obj) {
        if (typeof obj[items] == "function" || typeof obj[items] == "undefined" || obj[items] instanceof RegExp) {
            newJsonObj[items] = obj[items];
        }
    }
    var newObj = new obj.constructor;
    for (items in newJsonObj) {
        newObj[items] = newJsonObj[items]
    }
    return newObj;
}

// * ---------------- 实现的效果：

{
  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
      },
    ],
  };

  const mirrorData = clone(data);

  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  console.log(data.person[0].age === 24);
}
