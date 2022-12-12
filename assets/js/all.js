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
const ipAPI = '//api.ipify.org?format=json';
const inputValue = fetch(ipAPI).then(response => response.json()).then(data => data.ip);
const {
  value: ipAddress
} = await Swal.fire({
  title: 'Enter your IP address',
  input: 'text',
  inputLabel: 'Your IP address',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: value => {
    if (!value) {
      return 'You need to write something!';
    }
  }
});

if (ipAddress) {
  Swal.fire(`Your IP address is ${ipAddress}`);
}
//# sourceMappingURL=all.js.map
