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
