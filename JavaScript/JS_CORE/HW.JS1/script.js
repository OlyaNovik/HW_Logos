
// EX1

// let city;
// city = 'Київ';
// city = 'Lviv';
// adress = city;
// alert(adress);

// EX2
// let n=3;
// let result=n**3;
// console.log(result);

// EX3

// let pen=4;
// let cost_pen=5.25;
// let const_pencil=3.50;
// let pencil=6;
// document.write(cost_pen*pen + const_pencil*pencil);

//Ex5
// let q1 = prompt ("1+1");
// let q2 = prompt ("2+2");
// let q3 = prompt ("3+3");
// let q4 = prompt ("4+4");
// let q5 = prompt ("5+5");
// let q6 = prompt ("6+6");
// let q7 = prompt ("7+7");
// let q8 = prompt ("8+8");
// let q9 = prompt ("9+9");
// let q10 = prompt ("10+10");

// let pointsum = 0;


// if (q1 == 2){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// } 
// if (q2 == 4){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }
// if (q3 == 6){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }
// if (q4 == 8){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }
// if (q5 == 10){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }
// if (q6 ==12){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }
// if (q7 == 14){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }
// if (q8 == 16){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }
// if (q9 == 18){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }
// if (q10 == 20){
//     pointsum +=1;
//     console.log("+1 point:",  pointsum)
// }

// console.log (pointsum,'/10')

//Ex6
// let name1 = prompt("NAME");
//     if (name1 == "Stepan"){
//         let password = prompt("PAROL")
//         if (password == "LOGOS"){
//             alert("Welcome");
//         } else if (!password){
//             alert("Enter declined");
//         } else {
//             alert("Wrong Password");
//         }
//     } else if (!name1){
//         alert("Enter declined");
//     } else {alert("I dont know u");
// }

//EX7
let a = prompt("enter number");

if (a>=1 && a<=12){
    if (a == 1 || a==2 || a==12){
        alert("winter");
    }
    if (a ==3 || a==4 || a==5){
        alert("spring");
    } 
    if (a ==6 ||  a==7 || a==8){
        alert("summer");
    } 
    if (a ==9 || a==10 || a==11){
        alert("autumn");
    }
} else {
    alert("Try again!");
}