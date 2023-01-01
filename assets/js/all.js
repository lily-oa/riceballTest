"use strict";

// Swal.fire({
//   icon:'info',
//   title: '請填寫文字內容',
//   input: 'text',
// }).then(result => {
//   console.log(result.value);
//   Swal.fire({
//     icon:'success',
//     title:'新增內容成功',
//     text: result.value
//   })
// })

//----------------------------------------------------------test
var timeout = setTimeout(callFun, 1500);
function callFun() {
  console.log('觸發');
}
var timeout2 = setTimeout(function () {
  return console.log('qq');
}, 2000);
var timeout3 = setTimeout(function () {
  return console.log('你好');
}, 3000);
//# sourceMappingURL=all.js.map
