const Rx = require("rxjs/Rx")

var some = [2, 3,6]
var o = Rx.Observable.from(some)

o.subscribe(value => {
  console.log(value)
})

o.concat(Rx.Observable.from([3]))