let form=document.querySelector('.form');
let inp=document.querySelectorAll('.field');

let namef=document.querySelector('#f1');
let secName=document.querySelector('#f2');
let email=document.querySelector('#f3');
let phone=document.querySelector('#f4');
let pass=document.querySelector('#f5');
let warn1=document.querySelector('.i1');
let warn2=document.querySelector('.i2');
let warn3=document.querySelector('.i3');
let warn4=document.querySelector('.i4');
let warn5=document.querySelector('.i5');


function checkName(){  
   if(/\w{1,20}\D[^,-]$/.test(namef.value) == false ){
      namef.style.border='2px solid red';
      warn1.style.display='block'; } 
   else {namef.style.border='2px solid green';
         warn1.style.display='none'; }    
}

function checkSName(){  
   if(/\w{1,20}\D[^,-]$/.test(secName.value) == false ){
      secName.style.border='2px solid red';
      warn2.style.display='block'; } 
   else {secName.style.border='2px solid green';
      warn2.style.display='none'; }    
}

function checkEmail(){
   if(/\w+@\w+\.\w{2}/.test(email.value) == false ){
      email.style.border='2px solid red';
      warn3.style.display='block';} 
   else {email.style.border='2px solid green';
         warn3.style.display='none';}

}

function checkNum(){
   if(/\+38\(0\d{2}\)-\d{3}-\d{2}-\d{2}/.test(phone.value) == false ){
      phone.style.border='2px solid red';
      warn4.style.display='block'; } 
   else {phone.style.border='2px solid green';
         warn4.style.display='none';}
}

function checkPass(){
   if(/\w{10,15}[^,-]/.test(pass.value) == false ){
      pass.style.border='2px solid red';
      warn5.style.display='block'; } 
   else {pass.style.border='2px solid green';
         warn5.style.display='none';}
}
let btn=document.querySelector('.btn');
   btn.addEventListener('click',()=>{
      checkName();
      checkEmail();
      checkNum();
      checkSName();
      checkPass(); 
})

phone.addEventListener('click',()=>{
   phone.value='+38(0  ) -    -   -  ';
}) 

