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

let ColorLine= document.querySelector('.color_line');
let ColorText= document.querySelector('.color_text');
let liner =document.getElementsByTagName('p');
let link = document.getElementsByTagName('a');

ColorLine.addEventListener('keyup',(event)=>{
    const value = event.target.value;
    for( let i=0;i<liner.length;i++){
        if(liner[i].innerHTML.search('href') != -1){
         liner[i].style.background=value;
        }
    }
})
ColorText.addEventListener('keyup',(event)=>{
    const value = event.target.value;
    for( let i=0;i<liner.length;i++){
        if(liner[i].innerHTML.search('href') != -1){
         liner[i].style.color=value;
         for( let i=0;i<link.length;i++){
           link[i].style.color=value;
        }
        }
       
    }
})

// // let linkCreate =prompt('Enter link');
// let site = document.querySelectorAll('.linka');
// console.log(site);
// console.log(liner.innerHTML);


