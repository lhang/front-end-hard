function* generateValue() {
  console.log("first")
  yield "hello"
  console.log("second")
  return "world"
}

var g = generateValue()
console.log(g.next())
console.log(g.next())

// first
// { value: 'hello', done: false }
// second
// { value: 'world', done: true }