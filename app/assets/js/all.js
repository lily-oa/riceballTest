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
// const timeout = setTimeout(callFun, 1500);

// function callFun(){
//   console.log('觸發');
// }

// const timeout2 = setTimeout(()=> console.log('qq'), 2000);

// const timeout3 = setTimeout(() => console.log('你好'), 3000);

// const timeout4 = setTimeout(() => console.log('end'), 4000); 

//---------------------------------------------------------------test2
const checkScore = new Promise((resolve, reject) => {
  const score = Math.round(Math.random()*100);
  resolve(score);
});