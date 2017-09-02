// 接口
interface Person {
  firstName: string;
  lastName:string;
}


// 类型注解
function greeter(person: Person): string {
  return "Hello, " + person;
}

// 当把user传入greeter，ts编译时会判断传入的参数是否符合接口的规则
var user = {
  firstName: "Bob",
  lastName: "Daylen"
}


// 枚举类型
enum Color {Green, Red, Blue}
let c: Color = Color.Blue
console.log("color c", Color[2]， c)



// 属性重命名
let o = {
  a: "foo",
  b: 12,
  c: "bar"
}
let {a: newName1, b:newName2} = o;
// newName1:  foo newName2 12
console.log("newName1: ", newName1, "newName2", newName2)
// 等同于
let newName1 = o.a;
let newName2 = o.b;

// 如何跳过类型检查 -> 使用类型断言
