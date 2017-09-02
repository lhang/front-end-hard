// 类型注解
function greeter(person) {
    return "Hello, " + person;
}
// 当把user传入greeter，ts编译时会判断传入的参数是否符合接口的规则
var user = {
    firstName: "Bob",
    lastName: "Daylen"
};
// 枚举类型
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log("color c", Color[2], c);
// 属性重命名
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var newName1 = o.a, newName2 = o.b;
console.log("newName1: ", newName1, "newName2", newName2);
// 等同于
var newName1 = o.a;
var newName2 = o.b;
