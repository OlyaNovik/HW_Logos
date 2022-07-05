let FUp=document.forms["signUp"];
let Name=FUp.inName;
console.log(Name);
Name.addEventlistener('change',()=>{
    let nameVal= Name.value;
    console.log(nameVal);
})