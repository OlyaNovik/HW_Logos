let inpText=document.querySelector('.enter');
let parent=document.querySelector('.task1');
let firstInp=document.querySelector('.check');
// inpText.addEventListener('change',()=>{
//     let Inp = document.createElement('input')
//     Inp.type='checkBox';
//     Inp.value=inpText.value;  
//     parent.insertBefore(Inp, firstInp);
// })
let Inp = document.createElement('input')
    Inp.type='checkBox';
    parent.append(Inp);