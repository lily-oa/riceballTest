"use strict";

Swal.fire({
  icon: 'info',
  title: '請填寫文字內容',
  input: 'text'
}).then(function (result) {
  console.log(result.value);
  Swal.fire({
    icon: 'success',
    title: '新增內容成功',
    text: result.value
  });
});
//# sourceMappingURL=all.js.map
