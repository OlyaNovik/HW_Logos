

// input.addEventListener('keydown', (event)=>{

// switch (event.keyCode){
//     case 8: backspace.style.background = 'gray', backspace.style.color = 'white';
//     break;
//     case 32: space.style.background = 'gray';
//     break;
//     case 9: TAB.style.background = 'gray', TAB.style.color = 'white';
//     break;
//     case 20: CAPS.style.background = 'gray', CAPS.style.color = 'white';
//     break;
//     case 13: ENTER.style.background = 'gray', ENTER.style.color = 'white';
//     break;
//     case 16: SHIFT1.style.background = 'gray', SHIFT1.style.color = 'white', SHIFT2.style.background = 'gray', SHIFT2.style.color = 'white';
//     break;
//     case 48: zero.style.background = 'gray', zero.style.color = 'white';
//     break;
//     case 49: one.style.background = 'gray', one.style.color = 'white';
//     break;
//     case 50: two.style.background = 'gray', two.style.color = 'white';
//     break;
//     case 51: tree.style.background = 'gray', tree.style.color = 'white';
//     break;
//     case 52: four.style.background = 'gray', four.style.color = 'white';
//     break;
//     case 53: five.style.background = 'gray', five.style.color = 'white';
//     break;
//     case 54: six.style.background = 'gray', six.style.color = 'white';
//     break;
//     case 55: seven.style.background = 'gray', seven.style.color = 'white';
//     break;
//     case 56: eight.style.background = 'gray', eight.style.color = 'white';
//     break;
//     case 57: nine.style.background = 'gray', nine.style.color = 'white';
//     break;  
//     case 192: tilda.style.background = 'gray', tilda.style.color = 'white';
//     break;
//     case 189: minus.style.background = 'gray', minus.style.color = 'white';
//     break;  
//     case 187: equel.style.background = 'gray', equel.style.color = 'white';
//     break;    
// }
// // console.log(event.keyCode);
// let i = event.keyCode;
// console.log(i);


// input.addEventListener('keyup', (event)=>{

//     switch (event.keyCode){
//         case 8: backspace.style.background = 'white', backspace.style.color = 'black';
//         break;
//         case 32: space.style.background = 'white';
//         break;
//         case 9: TAB.style.background = 'white', TAB.style.color = 'black';
//         break;
//         case 20: CAPS.style.background = 'white', CAPS.style.color = 'black';
//         break;
//         case 13: ENTER.style.background = 'white', ENTER.style.color = 'black';
//         break;
//         case 16: SHIFT1.style.background = 'white', SHIFT1.style.color = 'black', SHIFT2.style.background = 'white', SHIFT2.style.color = 'black';
//         break;
//         case 48: zero.style.background = 'white', zero.style.color = 'black';
//         break;
//         case 49: one.style.background = 'white', one.style.color = 'black';
//         break;
//         case 50: two.style.background = 'white', two.style.color = 'black';
//         break;
//         case 51: tree.style.background = 'white', tree.style.color = 'black';
//         break;
//         case 52: four.style.background = 'white', four.style.color = 'black';
//         break;
//         case 53: five.style.background = 'white', five.style.color = 'black';
//         break;
//         case 54: six.style.background = 'white', six.style.color = 'black';
//         break;
//         case 55: seven.style.background = 'white', seven.style.color = 'black';
//         break;
//         case 56: eight.style.background = 'white', eight.style.color = 'black';
//         break;
//         case 57: nine.style.background = 'white', nine.style.color = 'black';
//         break; 
//         case 192: tilda.style.background = 'white', tilda.style.color = 'black';
//         break; 
//         case 189: minus.style.background = 'white', minus.style.color = 'black';
//         break;  
//         case 187: equel.style.background = 'white', equel.style.color = 'black';
//         break;    
//     }
//     })





let input = document.querySelector('.keyInput');

let numbers = document.getElementsByTagName('div');

let codeOfNumbers=[192,49,50,51,52,53,54,55,56,57,48,189,187,8,9,81,87,69,82,84,89,85,73,79,80,219,221,220,20,65,83,68,70,71,72,74,75,76,186,222,13,16,90,88,67,86,66,78,77,188,190,191,16,32];


input.addEventListener('keydown', (event)=>{
    let code=event.keyCode;
   for(let i=0;i<codeOfNumbers.length;i++){
    if(code==codeOfNumbers[i]){
        numbers[i].style.background='gray';
       console.log(codeOfNumbers[i]);}
   }
   
    
}) 

input.addEventListener('keyup', (event)=>{
    let code=event.keyCode;
   for(let i=0;i<codeOfNumbers.length;i++){
    if(code==codeOfNumbers[i]){
        numbers[i].style.background='white';
       console.log(codeOfNumbers[i]);}
   }
   
    
})

// input.addEventListener('keydown', (event)=>{
//     let i = event.keyCode;
//     console.log(i);
// })

