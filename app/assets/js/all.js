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
function correctTest(name) {
  return new Promise((resolve, reject) => {
    console.log('正在批改作業中');
    setTimeout(() => {
      const score = Math.round(Math.random() * 100);
      if (score >= 60) {
        resolve({
          name,
          score
        })
      }else{
        reject(`退學，分數是${score}`)
      }
    }, 1000);
  });
}

function checkReward(data){
  return new Promise((resolve, reject) => {
    console.log('正在檢查獎品中');
    setTimeout(()=>{
      if(data.score>=90){
        resolve(`${data.name}獲得電影票`)
      }else if(data.score>=60 && data.score<90){
        resolve(`${data.name}獲得嘉獎`)
      }
    }, 1000)
  })
}

correctTest("小明")
  .then(data => {
    return checkReward(data);
  })
  .then(reward => console.log(reward))
  //.then( data => console.log(`分數是${data.score}, 名字是${data.name}`))
  .catch(error => console.log(error))




















