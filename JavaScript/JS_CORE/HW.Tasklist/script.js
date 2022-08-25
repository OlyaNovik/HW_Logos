let list = document.querySelector('.list');
let check = document.querySelectorAll('.check');
console.log(check);

let exer = document.forms['exercise'];
let inpEnter =exer.enter;
let btnAdd =exer.add;
let warn =document.querySelector('.warning')

btnAdd.addEventListener('click',()=>{
   if(inpEnter.value != ''){
    createCheck();
   } else {
    //    warn.style.display='block';
       alert('TIHA BUD')
   }
   console.log(list.length);
})

let createCheck=function(){
    let valEnt=inpEnter.value;
    let div = document.createElement('div');
    div.setAttribute("class","inp");
    list.appendChild(div);
    let checknew= document.createElement('input');
    checknew.setAttribute("type", "checkbox");
    checknew.setAttribute("class", "check");
    div.appendChild(checknew);

    let name =document.createElement('p');
    name.innerHTML=valEnt;
    div.appendChild(name);
    
}


for(let i=0;i<5;i++){
    console.log(list[i]);
    list[i].addEventListener('click',()=>{
        console.dir(list[i]);
        list[i].remove();
    })
}

