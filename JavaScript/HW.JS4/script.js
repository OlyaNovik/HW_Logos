// -------------------- 1 --------------

// let Area = prompt("введіть радіус кола")

// function getArea (Area){
//     if (parseInt (Area)){
//         console.log(Math.PI*Area*Area);
//     } else if (isNaN (Area)){
//         console.log("Введіть числове значення");
//     } else if (Area == "") {
//         console.log("Будь ласка, введіть радіус");
//     }  
//     return Area;
// }
// getArea (Area);


// -------------------- 2 --------------


// let number = prompt("введіть число шоб зіднатись його корінь")

// function getSqrt (number){
//     if (number <= 0) {
//         console.log("Будь ласка, введіть додатнє число");}
//      else if (parseInt (number)){
//         console.log(Math.sqrt(number));
//     } else if (isNaN (number)){
//         console.log("Введіть числове значення");
//     } else if (number == "") {
//         console.log("Будь ласка, введіть число");
//     }  
//     return number;
// }
// getSqrt (number);


// -------------------- 3 --------------


// let MyMath = {
//     PI: 3.14,
//     POW: function (number, degree){
//         return number**degree;
//     },
//     ABS: function (number){
//         if (number < 0){
//             return -number;
//         } else {
//             return number;
//         }
//     },
//     MAX:  function max (){
//             let max = arguments[0];
//             for (let i = 0; i < arguments.length; i++){
//                 if (max<arguments[i]){
//                     max = arguments[i]
//                 }
//            }
//            return max;
//         } ,
//     MIN:  function min (){
//         let max = arguments[0];
//         for (let i = 0; i < arguments.length; i++){
//             if (max>arguments[i]){
//                 max = arguments[i]
//             }
//        }
//        return max;
//     } 
// }
// MyMath.POW(2,8);
// MyMath.ABS(-50);
// MyMath.MAX(2,10,20,25);
// console.log(MyMath.MIN(2,10,20,25));




//--------------- 4 --------------



// const arr1 = [1,2,3];
// let arr2 = [];

// let arrCopy = function(){
//     arr2=arr1
//     return arr2;
// }

// console.log(arrCopy());



//------------- 5 --------------


// let arr1 = [1,2,3]; 
// let arrSTR = [];
// let arrToString = function(){
//     arrSTR = arr1.map(String);
//     return arrSTR;
// }
// console.log(arrToString());



//----------------6------------


// let arr1 = ["Ivan", "Pavlo", "Ira"];
// let arrLENGTH;
// let getLength = function(){
//     arrLENGTH = arr1.map(item => item.length);
//     return arrLENGTH;
// }
// console.log(getLength());


//------------7---------------

// const arr1 = ["html","css","html","js","css"];

// let arrREMOVED = [];

// let removeDuplicates = function(){
//     arrREMOVED = [...new Set(arr1)];
//     return arrREMOVED;
// }

// console.log(removeDuplicates());