const axios = require("axios")

function runGenerator(fn) {
  var g = fn()
  g.next().value.then(result => {
    g.next(result)
  })
}

function* syncDemo() {
  const result = yield axios.get("https://www.github.com")
  console.log('after get result', result)
}

console.log("before get result")
runGenerator(syncDemo) 