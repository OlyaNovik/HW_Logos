
let SignBtn = document.getElementsByClassName('.btn_signUp');
// console.log(SignBtn);
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let email = document.querySelector('.email');
let password = document.querySelector('.passInp');
let user = [1,2,3];
// console.log(user);
// let key = ['name','lastname','email','password'];
// SignBtn.onclick=function(){
//     user = [1,2,3];
//     console.log(user);
// }
SignBtn.addEventListener('click',()=>{
    console.log(user);
//     let incr=0;
// for(let i = 0; i < user.length; i++ ){
//     incr++;
//     // localStorage.setItem(key[i]+incr,user[i]);
// }
// // localStorage.setItem('name',firstName.value);
// // localStorage.setItem('lastname',lastName.value);
// // localStorage.setItem('email',email.value);
// // localStorage.setItem('password',password.value);
})



(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()