let login = document.querySelector('.login');
let pass = document.querySelector('.pass');
let email = document.querySelector('.email');

let ediUs=document.querySelector('.edd');
let add = document.querySelector('.btn_add');
let table=document.querySelector('.table');

let wrap=document.querySelector('.wrraper_left');

let click=0;
let falseInp=0;
function CheckInp(){
    if(/\w{4,16}\D/.test(login.value)==false){
        login.style.border='2px solid red';
        falseInp++;
    }
        else
        {login.style.border='2px solid green'
        }

    if(/\w{4,16}/.test(pass.value)==false){
        pass.style.border='2px solid red'; falseInp++; } 
    else
    {pass.style.border='2px solid green';}
    if(/\w+@\w+\.\w+/.test(email.value)==false){
        email.style.border='2px solid red'; falseInp++; } 
    else
    {email.style.border='2px solid green';
    }
}

function DeleteFil(){
    login.value='';
    email.value='';
    pass.value='';
    login.style.border='2px solid gray';
    pass.style.border='2px solid gray';
    email.style.border='2px solid gray';
}

add.addEventListener('click',()=>{
    CheckInp();
    if(falseInp==0){
        click++;
        addUser();
        DeleteFil();
        
    }
    else{
        alert('Enter value');
        falseInp=0;
    }        
}
)



//ADDUSER


function addUser() {
    let Mclick=[];
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let edit=document.createElement('input');
    edit.type='button';
    edit.value='Edit';
    edit.classList.add('edit');
    let deleteb=document.createElement('input');
    deleteb.type='button';
    deleteb.value='Delete';
    deleteb.classList.add('dele');
    let ob=[];
        let obj={
            btn: edit,
            btn2:deleteb
            }
        ob.push(obj.btn);
        ob.push(obj.btn2);
        let mas=[click,login.value,pass.value,email.value];  
    for(let j=0;j<mas.length;j++){
        let td=document.createElement('td');
        tr.appendChild(td);
        td.classList.add('td');
        td.innerHTML=mas[j];
    }
        for( let i=0;i<ob.length;i++){ 
            let td=document.createElement('td');
            tr.appendChild(td);
            td.classList.add('td');
            td.appendChild(ob[i]); 
        } 
        deleteb.addEventListener('click',()=>{
            tr.remove();
        })
        edit.addEventListener('click',()=>{
            ediUs.style.display='block';
            add.style.display='none';  
            login.value=tr.children[1].innerHTML;
            pass.value=tr.children[2].innerHTML;
            email.value=tr.children[3].innerHTML;
            ediUs.addEventListener('click',()=>{
                tr.children[1].innerHTML=login.value;
                tr.children[2].innerHTML=pass.value;
                tr.children[3].innerHTML=email.value;
                ediUs.style.display='none';
                add.style.display='block';
                DeleteFil();
            })

        })
          
}
    





