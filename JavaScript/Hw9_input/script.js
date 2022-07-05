const form= document.forms['form1'];
form.btn.onclick= function(){
    if(form.inp.value != ""){
        form.out.value=form.inp.value;
        form.inp.value="";
    }
}



const form2= document.forms['form2'];
console.log(form2.tInp.placeholder);
form2.tInp=addEventListener('change',()=>{
if(form2.tInp.value !=''){
    console.log('text');
    form2.tInp.placeholder=form2.tInp.value;
    form2.tInp.value=""
}
})  