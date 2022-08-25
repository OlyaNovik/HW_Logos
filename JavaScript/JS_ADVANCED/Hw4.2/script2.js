let SignBtn = document.querySelector('.btn_signUp');
let Firstname = document.querySelector('.name_up');
let SecondName = document.querySelector('.sec_up');
let Email = document.querySelector('.email_up');
let Pass = document.querySelector('.pass_up');

let Clear = document.querySelector('.clear');
let incr = 0;
let userEmail= [];
// let arrayOfUser=[];
let user = new Object();
SignBtn.addEventListener('click',()=>{
    incr++;
    // let tools = Object.keys(localStorage);
    user.name = Firstname.value; 
    user.SecondName = SecondName.value;
    user.email = Email.value;
    user.password = Pass.value;
    // console.log('user',user);
    
    let listOfUser = [];
    localStorage.setItem(incr, JSON.stringify(user));
    console.log(localStorage.getItem('1'));
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let Getitem = localStorage.getItem(key);
        listOfUser = JSON.parse(Getitem);
        // console.log('user: ', listOfUser);
        userEmail.push(listOfUser.email);
        console.log('first' , userEmail);
        // console.log('entered user',user.email);
        // for(let i=0; i<userEmail.length;i++){
        // console.log(userEmail[i]); 
        
        // }
       


    }
})

Clear.addEventListener('click',()=>{
    localStorage.clear();
    })
    

// console.log(userEmail);


// if(userEmail[i] == userEmail[i]){
//     //        console.log('user.email', user.email);
//     //     console.log('the same');
//     //     console.log('userEmail',userEmail[i] );
//     // }  

// Перевіряє чи однаковіемейли

// if(userEmail[i] == userEmail[i+2])  {
//     console.log('index of',userEmail[i], 'and:  ', i);
//     userEmail.pop();
// }
// console.log('second',userEmail);