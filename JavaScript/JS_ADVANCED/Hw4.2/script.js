let SignBtn = document.querySelector('.btn_signUp');
let Firstname = document.querySelector('.name_up');
let SecondName = document.querySelector('.sec_up');
let Email = document.querySelector('.email_up');
let Pass = document.querySelector('.pass_up');
// let mas =[]
// let key=['name','lastname','email','password'];
let incr=0;

let Clear = document.querySelector('.clear');

// localStorage.setItem('0','{"Admin":"admin"}');
SignBtn.addEventListener('click',()=>{
    incr++;
    // let tools = Object.keys(localStorage);
    let user = new Object();
    user.name = Firstname.value; 
    user.SecondName = SecondName.value;
    user.email = Email.value;
    user.password = Pass.value;
    let listOfUser = [];
    localStorage.setItem(incr, JSON.stringify(user));
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let Getitem = localStorage.getItem(key);
        listOfUser = JSON.parse(Getitem);
        // console.log('key', Number(key), 'item: ', localStorage.getItem(key)); 
        console.log('key', Number(key), 'parse user: ', listOfUser);
        if(user.email == listOfUser.email){
            console.log('Same user');  
        }
    }
})

Clear.addEventListener('click',()=>{
localStorage.clear();
})















// let key = localStorage.key(i);
// //    console.log('key', Number(key));
//    if(user.email == listOfUser.email){
//         // console.log('same email');
//         localStorage.removeItem(Number(localStorage.key(i)))
// }


// for(let i = 0; i<tools.length;i++){
//     localStorage.setItem(incr, JSON.stringify(user));   
//     console.log(localStorage.getItem(tools[i]));
//     let StorageItem =localStorage.getItem(tools[i])
//     listOfUser = JSON.parse(StorageItem);
//     for(let i=0; i<localStorage.length-1; i++) {
      


        
//       }
    
// }













// SignBtn.addEventListener('click',()=>{
//     mas=[Firstname, SecondName,Email,Pass];
//     // console.log(mas);
//     incr++;
//     for(let i = 0; i < mas.length; i++){
//         if(mas[i].value != ''){
//             localStorage.setItem(key[i]+incr,mas[i].value);
//             mas[i].style.outline = 'none'
//         }
//         else{
//            mas[i].style.outline = '2px solid red'
//         }
//         let User=[];
//         let newkey1 = localStorage.getItem(key[0]+incr);
//         let newkey2 = localStorage.getItem(key[1]+incr);
//         let newkey3 = localStorage.getItem(key[2]+incr);
//         let newkey4 = localStorage.getItem(key[4]+incr);
//         // console.log(newkey1);
//         User=[newkey1,newkey2,newkey3,newkey4];
//         console.log(User);
//         // if(mas[i].value == newkey){
//         //     console.log('odne te same');
//         // }
//     }
//     // console.log(localStorage);
//     // for(let i = 0; i < localStorage.length; i++){
//     //     let keylocal = localStorage.getItem(key);
//     //     console.log(keylocal);
//     // }
// })

// localStorage.clear();