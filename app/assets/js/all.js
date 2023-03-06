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
// (async() =>{
// const ipAPI = '//api.ipify.org?format=json';

// const inputValue = fetch(ipAPI)
//   .then(response => response.json())
//   .then(data => data.ip)

// const { value: ipAddress } = await Swal.fire({
//   title: 'Enter your IP address',
//   input: 'text',
//   inputLabel: 'Your IP address',
//   inputValue: inputValue,
//   showCancelButton: true,
//   inputValidator: (value) => {
//     if (!value) {
//       return 'You need to write something!'
//     }
//   }
// })

// if (ipAddress) {
//   Swal.fire(`Your IP address is ${ipAddress}`)
// }
// })()

//----------------------------------------------------------------------todolist
//註冊
//const apiUrl = 'https://todoo.5xcamp.us/'
//Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNjA0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjczMTcxOTg1LCJleHAiOjE2NzQ0Njc5ODUsImp0aSI6IjU5YmQ0YTNmLTJhMzAtNGI3Zi05OGNhLTUyMTUwMDlhZWRiMSJ9.nWVfaZ50n4YemMnM6xJ4_Q9KYLvuZHsI7vI2flnZHeQ
//let token = '';
// function signUp(email, nickname, pwd) {
//   axios.post(`${apiUrl}/users`, {
//     "user": {
//       "email": email,
//       "nickname": nickname,
//       "password": pwd
//     }
//   })
//   .then(res => console.log(res))
//   .catch(error => console.log(error.response))
// }

//登入
// function login(email, pwd) {
//   axios.post(`${apiUrl}/users/sign_in`, {
//     "user": {
//       "email": email,
//       "password":pwd
//     }
//   })
  // 此行是在每次登錄時將 token 帶到 axios上
  // 事先在 headers 的欄位 [Authorization] 將 token抓過來
//     .then(res => axios.defaults.headers.common['Authorization'] = res.headers.authorization
//     )
//     .catch(error => console.log(error))
// }

//驗證金鑰 
// function getTodo(){
//   axios.get(`${apiUrl}/todos`)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
// }


//新增代辦事項
// function addTodo(todo){
//   axios.post(`${apiUrl}/todos`, {
//     "todo": {
//       "content": todo
//     }
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
// }

//編輯todo(單筆修改)
// function updateTodo(todo, todoId){
//   axios.put(`${apiUrl}/todos/${todoId}`, {
//     "todo": {
//       "content": todo
//     }
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
// }

//刪除 todos
// function deleteTodo(todoId){
//   axios.delete(`${apiUrl}/todos/${todoId}`)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
// }

//更新 todos 未完成及已完成(可以一直切換)
// function toggleTodo(todoId){
//   axios.patch(`${apiUrl}/todos/${todoId}/toggle`,{})
//   .then(res => console.log(res))
//   .catch(err => console.log(err.response))
// }

//-------------------------------------------------------------------------------------------------測試是否有支援垮網域
// function getAPI(){
//   axios.get('https://citypark.tainan.gov.tw/App/parking.ashx?verCode=5177E3481D&type=1&ftype=1&exportTo=2')
//   .then(res => console.log(res));
// }

//------------------------------------------------------------複習 0221

// setTimeout 計時器
// const timeout = setTimeout(callback function, 2000)

// const timeout = setTimeout(callFun, 3000);

// function callFun(){
//   console.log('觸發');
// }

// const timeout2 = setTimeout(()=>console.log('再次觸發'), 5000);

//------------------------------------------------------------promise
//檢查分數
//註冊一個 promise
// const checkScore = new Promise((resolve, reject) => {
//   console.log('正在批改中');
//   setTimeout(() => {
//產生一組2位數 0-99 分的隨機分數
//     const score = Math.round(Math.random() * 100);
//     if (score >= 60) {
//       resolve(score);
//     } else {
//       reject('不及格');
//     }
//   }, 2000);
// })

// checkScore
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

  // 註冊一份作業成績 
  // const hscore = new Promise((resolve, reject) => {
  //   console.log('老師批改作業中');
  //   setTimeout(() => {
  //     const score = Math.round(Math.random() * 100);
  //     if (score >= 80) {
  //       resolve(score);
  //     } else {
  //       reject('作業重寫');
  //     }
  //   }, 3000);
  // })

  // hscore
  //   .then(hdata => console.log(hdata))
  //   .catch(herror => console.log(herror));

  //promise 帶參數
//   const checkScore = (score)=>{
//   return new Promise((resolve, reject) => {
//     console.log('正在觀察是否及格');
//     setTimeout(() => {
//       if (score >= 60) {
//         resolve(score);
//       } else {
//         reject('不及格');
//       }
//     }, 2000);
//   })
// }

//   checkScore(80)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

//-------------------------------------設計兩個 promise 串接
//第一個 promise 計算成績
//第二個 promise 審核成績
// function correctTest(name){
//   return new Promise((resolve, reject) =>{
//     console.log('批改作業中');
//     setTimeout(()=>{
//       const score = Math.round(Math.random()*100);
//       if(score >= 20){
//         resolve(
//           {
//             name, 
//             score
//           }
//         )
//       }else{
//         reject("您已達退學的門檻");
//       }
      
      
//     }, 2000);
//   })
// }

// function checkReward(data){
//   return new Promise((resolve, reject) => {
//     console.log('檢查獎品中');
//     setTimeout(()=>{
//       if(data.score >= 90){
//         resolve(`${data.name}獲得電影票`)
//       }else if(data.score>=60 && data.score<90){
//         resolve(`${data.name}獲得嘉獎`)
//       }else{
//         console.log(data.score);
//         reject(`你沒有獎品打手心10下`)
//       }
//     }, 1000)
//   })
// }

// correctTest('小明')
//   .then(data => checkReward(data))
//   .then( reward => console.log(reward))
//   .catch(error => console.log(error));

// 想改寫成下方那樣
// const studentA = correctTest('小明');
// const reward = checkReward(studnetA);

// 改寫成下方非同步語法
//async、 await
//async 是非同步的語法
//await 是 then(){retrun}的意思，跑 promise
//init 初始化函式
// const init = async function(){
//   try{
//     const studentA = await correctTest('小明');
// 過一秒後才執行下段語法
// 這邊要暫停一下等它回傳我才執行下面的code
//     const rewardA = await checkReward(studentA);
//     console.log(rewardA);
//   }catch(error){
//     console.log(error)
//   }
// }
//執行函式
// init();

//----------------------------------------我做的範例
// 可不可以進去夜店
// function wantToGo(yourName){
//   return new Promise((resolve, reject) => {
//     console.log('你有多少錢？');
//     setTimeout(()=>{
//       const money = Math.round(Math.random()*1000);
//       if(money >= 200){    
//         resolve(
//           {
//             yourName,
//             money
//           }
//         )
//       }else{  
//         reject('錢不夠，滾出去!!')
//       }
//     }, 2000);
//   });
// }

// function canI(number){
//   return new Promise((resolve, reject)=>{
//     console.log('夠嗎？可以讓開了嗎!!!')
//     setTimeout(() => {
//       if(number.money >= 800){
//         resolve(`${number.yourName}你可以直接升級成我們的永久會員喔~`)
//       }else if(number.money >= 600 && number.money<800){
//         resolve(`${number.yourName}，你只要再加50萬就可以成為白金會員喔~每次來都能打8折`)
//       }else{
//         console.log(number.money);
//         reject(`很抱歉~你不能進去~你可以回去拿錢再來`)
//       }
//     }, 2000)
//   });
// }

// 原本的寫法
// wantToGo('親愛的~')
//   .then(number => canI(number))
//   .then(go => console.log(go))
//   .catch(error => console.log(error))


// 改寫成非同步的寫法
// async await 
// const init = async function(){
//   try{
//     const who = await wantToGo('親愛的~');
//     const decide = await canI(who);
//     console.log(decide);
//   }catch(error){
//     console.log(error);
//   }
// }

// init();

//-----------------------------promise.all
// function correctTest(name){
//   return new Promise((resolve, reject) =>{
//     console.log('批改作業中');
//     setTimeout(()=>{
//       const score = Math.round(Math.random()*100);
//         resolve(
//           {
//             name, 
//             score
//           }
//         )
//       }, Math.random()*10000);
//   })
// }

// Promise.all([correctTest('小明'), correctTest('小花'), correctTest('小小')])
//   .then(data => console.log(data));

//--------------------------------- Fetch
// const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

//----------------------------------XMLHttpRequest 改寫為 Promise 格式
// const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';


// function getUrl(url){
//   return new Promise((resolve, reject)=>{
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = () => console.log(xhr.responseText);
//     xhr.onerror = () => console.log(xhr.statusText);
//     xhr.send();    
//   })
// }

// getUrl(url)
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

//---------------------------------------axios.get 套件功能
// const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
// const axios = {
//   get: function(url){
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
//   .catch(error => console.log(error))

//-------------------------------------------sweet 2 彈跳視窗
// Swal.fire({
//   icon: 'success',
//   title: '新增成功',
//   text: '恭喜東西新增成功',
// })

// Swal.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,               //你要不要顯示刪除接鈕
//   confirmButtonColor: '#3085d6',        //左邊按鈕的顏色  
//   cancelButtonColor: '#d33',            //右邊取消是什麼顏色
//   confirmButtonText: 'Yes, delete it!'  //是否有確定要刪除
// }).then((result) => {
//   console.log(result);
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: 'Deleted!',
//       text: 'Your file has been deleted.',
//       icon: 'success'
//     })
//   }
// })

//------------------------------------------input types 可以在輸入框寫文字
// Swal.fire({
//   icon: 'info',
//   title: '請填寫文字欄位', 
//   input: 'text'
// }).then(result => {
//   console.log(result.value);
//   Swal.fire({
//     icon: 'success', 
//     title:'新增內容成功', 
//     text: result.value
//   })
// })

//-----------------------------註冊api
const apiUrl = 'https://todoo.5xcamp.us';

let token = '';

function signUp(email, nickname, password) {
  axios.post(`${apiUrl}/users`, {
      "user": {
        "email": email,
        "nickname": nickname,
        "password": password
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err.response))
}

//--------------------------檢查api有無支援跨網域
function getAPI(){
  axios.get('https://data.kcg.gov.tw/dataset/6f29f6f4-2549-4473-aa90-bf60d10895dc/resource/30dfc2cf-17b5-4a40-8bb7-c511ea166bd3/download/lightrailtraffic.json')
  .then(res => console.log(res))
}

//-----------------------------登入 login 及取得 authorization(授權碼)
function login(email, pwd){
  axios.post(`${apiUrl}/users/sign_in`, 
    {
      "user": {
      "email": email,
        "password": pwd
      }
    })
      .then(res => {
        token = res.headers.authorization;
      })
      .catch(err => console.log(err))
}

//----------------------------取得token 觸發代辨 todo api 
function getTodo(){
  axios.get(`${apiUrl}/todos`, {
    headers:{
      "Authorization": token
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err.response))
}

//---------------------------新增代辦
function addTodo(todo){
  axios.post(`${apiUrl}/todos`, 
{
  "todo": {
    "content": todo
  }
},{
  headers: {
    "Authorization": token
  }
})
  .then(res => console.log(res))
  .catch(err => console.log(err.response))
}

//-----------------------------編輯 todo API 設計