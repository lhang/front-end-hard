function Promise(fn) {
  var resolves = [], rejects = []

  this.then = function(resolve, reject) {
    resolves.push(resolve)
    rejects.push(reject)
  }

  const resolve = (value) => {
    resolves.forEach(callback => callback && callback(value))
  }

  const reject = (value) => {
    rejects.forEach(callbacks => callback && callback(value))
  }

  fn(resolve, reject)
  return this
}

var p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("after timeout")
    resolve()
  }, 1000)
})

p.then(() => {
  console.log("time out is done")
})