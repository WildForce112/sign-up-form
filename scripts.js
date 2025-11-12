const password = document.querySelector(".left-form>:last-child");
const passwordConfirm = document.querySelector(".right-form>:last-child");

// [password, passwordConfirm].forEach(el => {
//   if(el.value == ''){
//     el.style.borderColor = "rgb(205, 0, 0)";
//   }
// })

document.addEventListener('click', (e) => {
  const target = e.target.id;
  const passwordValue = password.value;
  const passwordConfirmValue = passwordConfirm.value;
  if(target == 'password'){
    password.style.borderColor = "rgb(50, 50, 255)";
    return;
  }
  // else {
  //   if(passwordValue == ''){
  //     password.style.borderColor = "rgb(205, 0, 0)";
  //   }
  //   else {
  //     password.style.borderColor = "#E5E7EB";
  //   }
  // }
  // if(target == 'confirm_password'){
  //   passwordConfirm.style.borderColor = "rgb(50, 50, 255)";
  //   return;
  // }
  // else {
  //   if(passwordConfirmValue == ''){
  //     passwordConfirm.style.borderColor = "rgb(205, 0, 0)";
  //   }
  //   else {
  //     passwordConfirm.style.borderColor = "#E5E7EB";
  //   }
  // }

  // if(target !== 'password' || target !== 'confirm_password') console.log(1);

  // switch (target){
  //   case 'password': {
  //     password.style.borderColor = "rgb(50, 50, 255)";
  //     return;
  //   }
  //   case 'confirm_password': {
  //     passwordConfirm.style.borderColor = "rgb(50, 50, 255)";
  //     return;
  //   }
  // }
  // if(passwordValue == ''){
  //     password.style.borderColor = "rgb(205, 0, 0)";
  //     return;
  //   }
  //   else {
  //     password.style.borderColor = "#E5E7EB";
  //     return;
  //   }

  // }
  // if(target == 'password') {
  //   password.style.borderColor = "rgb(50, 50, 255)";
  //   return;
  // }
  // else {
  //   if(password.value == '') {
  //     password.style.borderColor = "rgb(205, 0, 0)";
  //     return;
  //   }
  //   else {
  //     password.style.borderColor = "#E5E7EB";
  //     return;
  //   }
  // };

  // if(passwordConfirm.contains(e.target)) {
  //   passwordConfirm.style.borderColor = "rgb(50, 50, 255)";
  //   return;
  // }
  // if(!passwordConfirm.contains(e.target)) {
  //   if(passwordConfirm.value == '') {
  //     passwordConfirm.style.borderColor = "rgb(205, 0, 0)";
  //     return;
  //   }
  //   else {
  //     passwordConfirm.style.borderColor = "#E5E7EB";
  //     return;
  //   }
  // };

})