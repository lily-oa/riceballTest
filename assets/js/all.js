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
// const timeout = setTimeout(callFun, 1500);

// function callFun(){
//   console.log('觸發');
// }

// const timeout2 = setTimeout(()=> console.log('qq'), 2000);

// const timeout3 = setTimeout(() => console.log('你好'), 3000);

// const timeout4 = setTimeout(() => console.log('end'), 4000); 

//---------------------------------------------------------------test2
// const checkScore = new Promise((resolve, reject) => {
//   console.log('正在批改中')
//   setTimeout(()=>{
//    const score = Math.round(Math.random()*100);
//    if(score >= 60){
//     resolve(score);
//    }else{
//     reject('不及格');
//    }
//   }, 2000);

// });

// checkScore
//   .then(data => console.log(data))  
//   .catch(error => console.log(error))

// const checkStuName = new Promise((resolve, reject) =>{
//   console.log('正在確認名單');
//   setTimeout(() => {
//     const stuScore = Math.round(Math.random()*100);
//     if(stuScore >= 60){
//       resolve(stuScore);
//     }else{
//       reject(`${stuScore}這是要刪除的名單號`);
//     }
//   }, 5000);
// });

// checkStuName
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//------------------------------------------------------test3
// const checkScore = (score) =>{
//   return new Promise((resolve, reject) => {
//     console.log('正在觀察是否及格')
//     setTimeout(()=>{

//     if(score >= 60){
//       resolve(score);
//     }else{
//       reject('不及格');
//     }
//     }, 2000);
//   });
// }

// checkScore(60)
//   .then(data => console.log(data))  
//   .catch(error => console.log(error))

//-------------------------------------------------------test4
// function correctTest(name) {
//   return new Promise((resolve, reject) => {
//     console.log('正在批改作業中');
//     setTimeout(() => {
//       const score = Math.round(Math.random() * 100);
//       if (score >= 20) {
//         resolve({
//           name,
//           score
//         })
//       }else{
//         reject(`退學，分數是${score}`)
//       }
//     }, 1000);
//   });
// }

// function checkReward(data){
//   return new Promise((resolve, reject) => {
//     console.log('正在檢查獎品中');
//     setTimeout(()=>{
//       if(data.score>=90){
//         resolve(`${data.name}獲得電影票`)
//       }else if(data.score>=60 && data.score<90){
//         resolve(`${data.name}獲得嘉獎`)
//       }else{
//         reject(`你沒有獎品，打手心10下!分數是${data.score}`)
//       }
//     }, 1000)
//   })
// }

// correctTest("小明")
//   .then(data => {
//     return checkReward(data);
//   })
//   .then(reward => console.log(reward))
//.then( data => console.log(`分數是${data.score}, 名字是${data.name}`))
//   .catch(error => console.log(error))

//-------------------------------------------------------------------------------test5
// function correctTest(name) {
//   return new Promise((resolve, reject) => {
//     console.log('正在批改作業中');
//     setTimeout(() => {
//       const score = Math.round(Math.random() * 100);
//       if (score >= 20) {
//         resolve({
//           name,
//           score
//         })
//       }else{
//         reject(`退學，分數是${score}`)
//       }
//     }, 1000);
//   });
// }

// function checkReward(data){
//   return new Promise((resolve, reject) => {
//     console.log('正在檢查獎品中');
//     setTimeout(()=>{
//       if(data.score>=90){
//         resolve(`${data.name}獲得電影票`)
//       }else if(data.score>=60 && data.score<90){
//         resolve(`${data.name}獲得嘉獎`)
//       }else{
//         reject(`你沒有獎品，打手心10下!分數是${data.score}`)
//       }
//     }, 1000)
//   })
// }

// async、await  非同步語法
// const init = async function () {
//   try {
//     const studentA = await correctTest('小明');
// 過一秒後才執行下段語法
//     const rewardA = await checkReward(studentA);
//     console.log(rewardA);

//   } catch (error) {
//     console.log(error)
//   }
// }
// init();

//--------------------------------------------------------test6
// Promise.all
// function correctTest(name) {
//   return new Promise((resolve, reject) => {
//     console.log('正在批改作業中');
//     setTimeout(() => {
//       const score = Math.round(Math.random() * 100);
//         resolve({
//           name,
//           score
//         })
//     }, Math.random() * 1000);
//   });
// }
// Promise.all([correctTest('小明'),correctTest('小花'),correctTest('小小')])
//   .then(data => console.log(data));

//-------------------------------------------------------------test7
// Fetch
// const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

//------------------------------------------------------------test8
// XMLHttpRequest
// const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';

// 非同步的寫法
// function getUrl(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = () => resolve(xhr.responseText);
//     xhr.onerror = () => reject(xhr.statusText);
//     xhr.send();
//   })
// }

// getUrl(url)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//---------------------------------------------------------------test9
// axios 
// const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
// const axios = {
//   get: function(url) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', url);
//       xhr.onload = () => resolve(xhr.responseText);
//       xhr.onerror = () => reject(xhr.statusText);
//       xhr.send();
//     })
//   }
// }

// axios.get(url)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//----------------------------------------------------------------test10
//sweetalert2  彈跳視窗，此套件的載入方式是在 layout.ejs 使用它的 cdn

// Swal.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!'
// }).then((result) => {
//   console.log(result);
//   if (result.isConfirmed) {
//     Swal.fire(
//       {
//         title: '新增成功',
//         icon: 'success',
//       }
//     )
//   }
// })

//------------------------------------------------------------------test11
// sweetalert2 input Types
// Swal.fire({
//   icon: 'info',
//   title: '請填寫文字內容',
//   input: 'text'
// }).then(result =>{
//   console.log(result.value);
//   Swal.fire({
//     icon:'success', 
//     title:'新增內容成功',
//     text: result.value,
//   })
// })

//-------------------------------------------------------------------test12
var ipAPI = '//api.ipify.org?format=json';
var inputValue = fetch(ipAPI).then(function (response) {
  return response.json();
}).then(function (data) {
  return data.ip;
});
var _await$Swal$fire = await Swal.fire({
    title: 'Enter your IP address',
    input: 'text',
    inputLabel: 'Your IP address',
    inputValue: inputValue,
    showCancelButton: true,
    inputValidator: function inputValidator(value) {
      if (!value) {
        return 'You need to write something!';
      }
    }
  }),
  ipAddress = _await$Swal$fire.value;
if (ipAddress) {
  Swal.fire("Your IP address is ".concat(ipAddress));
}
//# sourceMappingURL=all.js.map
