// ----------1------------

// let n = prompt("enter your number please dude");

// let res = 1;

// for ( let i = 1; i<=n; i++){
//     res = res*i;
// }
// console.log(res);

//------Перероблений на while
// let n = prompt("enter your number please dude");
// let res = 1;
// let i=1;
// while(i<=n){
// res=res*i;
// i++;
// }
// console.log(res);


// ----------2------------

// for ( let i = 1000; i<=9999; i+=3) {
//     console.log (i);
// }

//------Перероблений на while
// let i=1000;
// while(i<9999){
//     i+=3;  
//    console.log (i);

// }


// ----------3------------

// let m;

// for (let i = 1, m = 1; m<=55; i+=2, m++){
//     console.log(i);
// }

//------Перероблений на while
// let m=1;
// let i=1;
// do {
//     console.log(i);
//     i+=2;
//     m++;
  
// } while(m<=55)

// while(m<=55){
// console.log(i);
// i+=2;
// m++;
// }


// ----------4------------


// let n;
// for (n = 90 ; n >=0; n-=5){
//     console.log(n)
// }


//------Перероблений на while
// let n=90;
// while(n>0){
// n-=5;
// console.log(n);
// }

// ----------5------------


// let m;

// for (let i = 2, m =1 ; m<=20; i*=2, m++){
//     console.log(i);
// }

//------Перероблений на while
// let i=2;
// let m=1;
// while(m<=20){

// console.log(i);
// i*=2;
// m++
// }


// ----------6------------


// for (let a=2, b = 1; b<=10000; a++, b=2*a-1){
//     console.log(b);
// }
//------Перероблений на while

// let a=2, b=1;
// do{
//     b=2*a-1;
//     console.log(b);
//     a++;
   
// } while(b<=10000)


// ----------6 varian 2------------


// for(let a=2; a<10000; a=2*a-1){
//    console.log(a);
// }

// ----------7------------

// for (a = -166 ; a<1000;  a=2*a+200) {
//     if (a>9 && a<99 || a>-99 && a<-9){
//     console.log (a);
// }}

// let a=-166;
// while(a<1000){
//     a=2*a+200;
//     if (a>9 && a<99 || a>-99 && a<-9){
//     console.log (a);
// }

// }
// ----------8------------

// let a = prompt("Enter number");
// let b = prompt("Enter power of number");


// let res = 1;

// for (let i =1; i <= Math.abs(b); i++){
//     if (b>0){
//         res *=a;
//     } else if (b<0){
//         res/=a;
// }}
// console.log(res);


//-------Перероблений на while
// let a = prompt("Enter number");
// let b = prompt("Enter power of number");

// let i =1;
// let res = 1;
// while(i <= Math.abs(b)){ 
    
//     if (b>0){
//         res *=a;
//     } else if (b<0){
//         res/=a;}  
//         i++;    
// }
// console.log(res);
