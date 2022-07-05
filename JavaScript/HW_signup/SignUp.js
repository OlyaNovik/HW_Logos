const forma = document.forms['SignUp'];

let Name = forma.name;
let Surname = forma.surname;
let Mail = forma.email;
let Sex = forma.sex;
let Position = forma.position;
let Agree = forma.agree;
let btnIN = forma.btn_signUp;

let initials = document.querySelector('.nameAndSurnameOUT');
let emailOut = document.querySelector('.EmailOUT');
let posOut   = document.querySelector('.positionOUT');
let img_woman = document.querySelector('.img_woman');
let img_man = document.querySelector('.img_man');
let signOUT = document.querySelector('wrapper3'); 
let signIN = document.querySelector('.wrapper');
let bntOut = document.querySelector('.SignOut');



Agree.onchange = function (){
    if (Agree.checked == true && Name.value != '' && Surname.value != '' && Sex.value != ''){
        btnIN.disabled = false;
        btnIN.style.background = 'rgb(28, 152, 74, 100%)';
}}


btnIN.onclick = function (){
    initials.innerHTML = Name.value + " " + Surname.value;
    emailOut.innerHTML = Mail.value;
    posOut.innerHTML = Position.value;
    if (Sex.value == 'Man'){
        img_man.style.display = 'block';
        img_woman.style.display = 'none';
    } else if (Sex.value == 'Woman'){
        img_man.style.display = 'none';
        img_woman.style.display = 'block';
    }
    signOUT.style.display = 'flex';
    signIN.style.display = 'none';
}

bntOut.onclick = function() {
    forma.reset();
    btnIN.style.background = 'rgb(28, 152, 74, 50%)';
    signIN.style.display = 'block'; 
    signOUT.style.display = 'none';

}

// for(let i=0;i<Sex.length; i++){
//     Sex[i].addEventListener('click', () => {
//         console.log(Sex[i].value);
// })}

// Position.onchange = function (){
//     for(let i=0; i<Position.options.length; i++){
//         if (Position.options[i].selected == true){
//             console.log(Position.options[i].value);
// }}}