let globalDate=document.querySelector('.mini_text');
let globalTime =document.querySelector('.big_text');



let timerSet=document.querySelector('.timer_set');
let timerText=document.querySelector('.timer_text');


let stopwatch=document.querySelector('.seconds');
let loop=document.querySelector('.loop');
let start=document.querySelector('.start');
let stopbtn=document.querySelector('.stop');
let reset=document.querySelector('.reset');
let area=document.querySelector('.area');
let date=new Date;

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

let start2=document.querySelector('#start2');
let stop2=document.querySelector('#stop2');
let reset2=document.querySelector('#reset2');


//Дата та час сьогодні
let year=date.getFullYear();
let mounth=date.getMonth()+1;
let day=date.getDate();
if(day< 10){
    day='0'+day;
}
if(mounth<10){
    mounth='0'+ mounth;
}
globalDate.innerHTML=day + '.' + mounth + '.' + year;


setInterval(function(){
    let date=new Date;
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    if(h<10) h='0'+h;
    if(m<10) m='0'+m;
    if(s<10) s='0'+s;
    globalTime.innerHTML=`${h}:${m}:${s}`;
}, 1000);

let sec = 0;
let min = 0;
let hrs = 0;
let mil=0;

// СЕКУНДОМІР
function tick(){
    sec++
    if (sec >= 60) {
        sec =0;
        min++;
        if (min >= 60) {
            min =0;
            hrs++;
        } else if(min<10) {min='0'+min};
    } else if(sec<10){sec='0'+sec;};
 stopwatch.innerHTML=`${hrs}:${min}:${sec}:${mil}`;
}

start.addEventListener('click',()=>{
    startMil=setInterval(function(){
        mil++;
    if(mil>=1000){
        mil=0;
       
    }},1)
    
    if(mil<10){mil='00'+ mil;}
    else if(mil<100){mil='0'+ mil;};
    if(hrs<10) {hrs='0'+hrs};
    if(min<10) {min='0'+min}; 
    startSec=setInterval(tick,1000);
    
});


stopbtn.addEventListener('click',()=>{
    clearInterval(startSec);
})

loop.addEventListener('click',()=>{
    console.dir(area);
    let p=document.createElement('p');
    area.appendChild(p);
    p.innerHTML+=stopwatch.innerHTML;
})
reset.addEventListener('click',()=>{
    stopwatch.innerHTML=`00:00:00:000`;
    clearInterval(startSec);
})




// ВСТАНОВЛЕННЯ ТАЙМЕРА
let tim=0;
plus.addEventListener('click',()=>{
    tim++;
    timerSet.innerHTML=tim;
})
minus.addEventListener('click',()=>{
    tim--;  
    if(tim<1){
        tim='00';
    }
    timerSet.innerHTML=tim;
})
let secc=0;

// Таймер
start2.addEventListener('click',function(){
    if(tim<10){tim='0'+ tim};
    timerText.innerHTML=`${tim}:00`;
    setTimeout(function(){
    tim--;
    if(tim<10){tim='0'+ tim};
    secc=59;
    timerText.innerHTML=`${tim}:${secc}`;
    clock=setInterval(function(){
        secc--;
        if(secc<10){secc='0'+ secc};
        timerText.innerHTML=`${tim}:${secc}`;
        if(secc == 0){
            tim--;
            if(tim<10){tim='0'+ tim};
            secc=59;
        timerText.innerHTML=`${tim}:${secc}`;
        }
        
    },1000);
},1000);
});


reset2.addEventListener('click',()=>{
    console.log('reset');
    timerText.innerHTML=`00:00`;
    tim=0;
    secc=0;
    clearInterval(clock);
})

stop2.addEventListener('click',()=>{
   clearInterval(clock);
})

