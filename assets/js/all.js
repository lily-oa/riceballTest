"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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

//----------------------------------------------------我設計的範例 
// 可不可以進去夜店
function wantToGo(yourName) {
  return new Promise(function (resolve, reject) {
    console.log('你有多少錢？');
    setTimeout(function () {
      var money = Math.round(Math.random() * 1000);
      if (money >= 300) {
        resolve({
          yourName: yourName,
          money: money
        });
      } else {
        reject('錢不夠，滾出去!!');
      }
    }, 3000);
  });
}
function canI(number) {
  return new Promise(function (resolve, reject) {
    console.log('夠嗎？可以讓開了嗎!!!');
    setTimeout(function () {
      if (number.money >= 500) {
        resolve("".concat(number.yourName, "\u4F60\u53EF\u4EE5\u76F4\u63A5\u5347\u7D1A\u6210\u6211\u5011\u7684\u6C38\u4E45\u6703\u54E1\u5594~"));
      } else if (number.money >= 300 && number.money < 500) {
        resolve("".concat(number.yourName, "\uFF0C\u4F60\u53EA\u8981\u518D\u52A050\u842C\u5C31\u53EF\u4EE5\u6210\u70BA\u767D\u91D1\u6703\u54E1\u5594~\u6BCF\u6B21\u4F86\u90FD\u80FD\u62538\u6298"));
      }
    }, 2000);
  });
}

// wantToGo('親愛的~')
//   .then(number => canI(number))
//   .then(go => console.log(go))
//   .catch(error => console.log(error))

// async await
var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var someOne, into;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return wantToGo('親愛的~');
          case 3:
            someOne = _context.sent;
            _context.next = 6;
            return canI(someOne);
          case 6:
            into = _context.sent;
            console.log(into);
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function init() {
    return _ref.apply(this, arguments);
  };
}();
init();

//---------------------------------async await非同步的語法
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
// const rewardA = checkReward(studnetA);

// async、 await
// async 是非同步的語法
// await 是 then(){retrun}的意思，跑 promise
// init 初始化函式
// const init = async function(){
//   try{
//     const studentA = await correctTest('小明');
//     // 過一秒後才執行下段語法
//     // 這邊要暫停一下等它回傳我才執行下面的code
//     const rewardA = await checkReward(studentA);
//     console.log(rewardA);
//   }catch(error){
//     console.log(error)
//   }
// }
// //執行函式
// init();
//# sourceMappingURL=all.js.map
