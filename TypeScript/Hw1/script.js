//------------ex1-----------
// let city: string;
// city = 'Київ';
// city = 'Львів';
// let address: string = city;
// console.log(address);
//------------ex2-----------
// let Num = Number(prompt('Enter number'));
// let dil: number;
// dil = Num%2;
// Num == 0 ? console.log('This number is 0') : dil == 0 ? console.log('parne', Num) : console.log('ne parne', Num);
//------------ex3-----------
// function MaxArg(a:number,b:number,c:number,d :number){
//         // console.log(Math.max(arguments[i]));
//     }
// }
// MaxArg(1,3,2,6);
var Exer = prompt('Enter number');
function GetSqrt(Exer) {
    if (Exer == '') {
        alert('Enter number, please');
    }
    else if (Exer < 0) {
        alert('Enter a positive number');
    }
    else if (Exer == String) {
        alert('Number please');
    }
    else {
        console.log(Math.sqrt(Exer));
    }
}
GetSqrt(Exer);
