
let sum = function () { 
    let res = 0; 
    return function(x) {  
       res += x; 
       console.log(res);  
       return res;  
} }; 

let fn = sum(3); 

fn(3); 
fn(5); 
fn(228);