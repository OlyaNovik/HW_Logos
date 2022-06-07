let backColor = document.querySelector(".backgr");
backColor.addEventListener('keyup', event => {
    const value = event.target.value;
        document.body.style.background = value;
})
let font = document.querySelector('.font');
font.addEventListener('keyup', event => {
    const value = event.target.value;
    document.body.style.fontWeight = value;
    document.body.style.fontStyle = value;

})
let alignText= document.querySelector('.aligntext');
const h1=document.querySelector('.h_1');
alignText.addEventListener('click', event =>{
h1.style.textAlign = 'center';

})
let alignText2= document.querySelector('.aligntext2');
const h2=document.querySelector('.h_1');
alignText2.addEventListener('click', event =>{
h2.style.textAlign = 'end';

})
let alignText3= document.querySelector('.aligntext3');
const h3=document.querySelector('.h_1');
alignText3.addEventListener('click', event =>{
h2.style.textAlign = 'start';

})
let div =document.querySelector('#divv');
let container=document.querySelector('.container');
let parag=document.querySelector('.parag')
div.addEventListener('keyup',event =>{
    const value = event.target.value;
    container.style.color = value;
    container.style.fontWeight = value;
    container.style.fontStyle = value;
    parag.style.fontSize=value+'px';
})
let Marker= document.querySelector('#marker');
let list=document.querySelector('.list');
Marker.addEventListener('change',(event)=>{
    const value = Marker.value;
    list.style.listStyleType=value;
})
// let link= document.getElementsByTagName('a');
// let line=document.getElementsByTagName('p')
// if(line.item){

// }
// if(window.location.href){
//     let backParag=document.querySelector('p');
//     backParag.style.background='red';
// }
// if(document.getElementsByClassName('.linka')){
//        document.body.style.background='red';

// }

// for (let elem of document.getElementsByTagName("p").children) {
//     if (elem.matches('a[href$="com"]')) {
//       console.log("Ссылка на архив: " + elem.href );
//     }
//   }
//   for (let elem of document.body.children) {
//    if (elem.matches('a[href$="com"]')) {
//         alert("Ссылка на архив: " + elem.href );
//       }
//   }
// function nnn(){
// let paragraf = document.querySelector("p");
//     console.log('Done');
//     paragraf.querySelector('a').style.background='green';
// }

// nnn();