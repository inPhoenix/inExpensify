// const promise = new Promise((resolve, reject) => {
//   console.log('1: new Promise start:')
//   setTimeout(() => {
//     resolve(console.log('2: executed after 2s.'))
//   },2000)
// })
//
// promise.then(() => {
//   console.log('3: the END')
// })
//
//
// const promise2 = new Promise((resolve, reject) => {
//   console.log('1: new Promise start:')
//   setTimeout(() => {
//     resolve({
//       name: 'phoenix',
//       age: '30'
//     })
//   },3000)
// })
//
// promise2.then((data) => {
//   console.log('Object after 3s:', data)
// })
