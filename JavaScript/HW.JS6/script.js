///TEXT
// Variant 1
// let colorM=['red','yellow','green','blue','orange','gray'];
// let line = document.getElementsByTagName('li');
// console.log(line);
// for(let i=0;i<=line.length;i++){
// line[i].addEventListener('click', ()=>{  
//              line[i].style.color=colorM[i];
//     })
// }
// Variant 2
// let red= document.querySelector('#red');
// red.addEventListener('click', ()=>{
//         red.style.color='red';
    
// })
// let yellow = document.querySelector('#yellow');
// yellow.addEventListener('click', ()=>{
//         yellow.style.color='yellow';
    
// })
// let green= document.querySelector('#green');
// green.addEventListener('click', ()=>{
//     green.style.color='green';
    
// })
// let blue = document.querySelector('#blue');
// blue.addEventListener('click', ()=>{
//     blue.style.color='blue';
    
// })
// let orange= document.querySelector('#orange');
// orange.addEventListener('click', ()=>{
//     orange.style.color='orange';
    
// })
// let gray = document.querySelector('#gray');
// gray.addEventListener('click', ()=>{
//     gray.style.color='gray';
    
// })

//ex1


// let box = document.querySelector('.block');
// let colors = ['red', 'yellow', 'green'];

// box.dataset.current = 0;

// box.onmouseout = function() {
//   this.style.backgroundColor = 'purple';
// }

// box.addEventListener('mouseover', function(event) {
//   this.style.backgroundColor = colors[this.dataset.current];
//   this.dataset.current++;
//   if (this.dataset.current >= colors.length) {
//     this.dataset.current = 0;
//   }
// });

//sicret

// let block = document.querySelector('.sicret');

// block.addEventListener('mouseover', ()=>{
//     block.style.background = 'yellow';
//     block.innerHTML = 'Хочете знати який?';
//     block.style.color = 'green';

// })
// block.addEventListener('mouseout', ()=>{
//     block.style.background = 'blueviolet';
//     block.innerHTML = 'У мене є секрет!';
//     block.style.color = 'white';

// })
// block.addEventListener('mousedown', ()=>{
//     block.style.background = 'black';
//     block.style.color = 'red';
//     block.innerHTML = 'А я вам не скажу!!!';
    
// })
// block.addEventListener('mouseup', ()=>{
//     block.style.background = 'yellow';
//     block.innerHTML = 'Хочете знати який?';
//     block.style.color = 'green';

// })

//images

// let block1 = document.querySelector('#first');
// let link1;
// block1.addEventListener('click', ()=>{
//     link1 = prompt('Enter URL of Picture');
//     block1.style.backgroundImage = "url(" + link1 + ")"
// })

// let block2 = document.querySelector('#second');
// let link2;
// block2.addEventListener('click', ()=>{
//     link2 = prompt('Enter URL of Picture');
//     block2.style.backgroundImage = "url(" + link2 + ")"
// })

// let block3 = document.querySelector('#third');
// let link3;
// block3.addEventListener('click', ()=>{
//     link3 = prompt('Enter URL of Picture');
//     block3.style.backgroundImage = "url(" + link3 + ")"
// })
