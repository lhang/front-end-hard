const a = ['1', '2', '3']

// let b = []

// for (let i = 0; i < a.length; i++) {
//   b.push(Number(a[i]))
// }


// let b = []
// a.forEach(i => {
//   b.push(Number(i))
// })

const b = a.map(i => {
  return Number(i)
})

console.log(b)