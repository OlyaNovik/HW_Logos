 // --------- ex 1 not done ----------
// let ArrowFib = n => {
//     let a = 1;
//     let b = 1;
//     for (i = 1; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//       console.log(c)
//     }
//   }
// console.log(ArrowFib(5));


 // --------- ex 2/1 ----------
// let sum = function(n,q){
//     let k = 1;
//     let SUMMA = 0;
//     for (i = 1; i <= n; i++){
//     console.log(k);
//     k *= q;
//     SUMMA += k;
// }
// console.log("Сумма:", SUMMA/q);
// }
// console.log(sum (4,3));
    

// --------- ex 2/2 ----------

// let sum = function(n,q){
//     let b1 = 1;
//     let Sn = b1 * ((1 - q**n)/(1-q));
//     return Sn;
// }
// console.log (sum(4,3)); 


// --------- ex 3 ----------


// let start = parseInt(prompt('Enter lower number: '));
// let end = parseInt(prompt('Enter higher number: '));

// let range = (start,end) => {

// for (let i = start; i <= end; i++) {
//     let num = 0;

// for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             num = 1;
//             break;
//     }
// }


// if (i > 1 && num == 0) {
//         console.log(i);
//     }
// }}
// console.log(range(start, end));


//----------ex 4 ------------

// let Person = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     showData: function(){
//         return this.firstName + " " + this.lastName
//     }
// }
// let NewPerson = {
//     firstName: "Petro",
//     lastName: "Petriv",
//     showData: function(){
//         return this.firstName + " " + this.lastName
//     }
// }

// console.log(Person.showData());
// console.log(NewPerson.showData());


//----------ex 5 ------------


// let MyMath = {
//     a:  5,
//     b: 2,
//     sum: function(){
//         return this.a + this.b;
//     },
//     multiplication : function(){
//         return this.a * this.b;
//     },
//     division : function(){
//         return this.a / this.b;
//     },
//     substraction : function(){
//         return this.a - this.b;
//     }
// }

// console.log(MyMath.sum());
// console.log(MyMath.multiplication());
// console.log(MyMath.division());
// console.log(MyMath.substraction());



//----------ex 6 ------------


// let space = prompt("Enter smth with spacebar");

// console.log(space.split(' ').length-1);



//----------ex 7 ------------


// let mail = prompt("Enter your Email");

// let check = function(){
//     if (mail.startsWith("@") || mail.endsWith("@") || !mail.includes("@")){
//     } 
//     else
//     console.log(mail);

// }

// check();



//----------ex 8 ------------


// let html = prompt("Enter smth with html");

// console.log(html.split('html').length-1);


//----------ex 9 ------------


// let str = prompt("enter domen");

// if (str.includes("https://")){
//     console.log(str.replace("https://", ""));
// } else if (str.includes("http://")){
//     console.log(str.replace("http://", ""));
// }
