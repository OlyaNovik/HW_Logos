let dropdownItem = document.querySelectorAll('.size');
let ArrTextSize = [12,14,16,18,20,22,25,30];
let text = document.forms['text_ar'];
let mainBlock=document.querySelector('.main_block');


let ColorBox = document.querySelectorAll('.color_box');
let ArrColorBox = ['LightSeaGreen','DarkCyan','LimeGreen','MediumSeaGreen','DodgerBlue','SteelBlue','MediumOrchid','DarkOrchid','#28595d','#0c2d32','Gold','Orange','DarkOrange','OrangeRed','Tomato','FireBrick','Gainsboro','Silver','DarkGray','SlateGray','Black'];
let ColorBox2=document.querySelectorAll('.color_box2');

let modal1 = document.querySelector('.m1');
let modal2 = document.querySelector('.m2');
let modal3 = document.querySelector('.m3');

let imgBTN = document.querySelector('.Image_btn');
let colorBTN = document.querySelector('.colors_btn');
let filesBTN = document.querySelector('.files_btn');


let B_btn = document.querySelector('.B');
let I_btn = document.querySelector('.I');
let U_btn = document.querySelector('.U');
let S_btn = document.querySelector('.S');

let StTxtBtn = document.querySelector('.st_text');
let CenTxtBtn = document.querySelector('.cen_text');
let EndTxtBtn = document.querySelector('.end_text');

let familyStyle=document.querySelectorAll('.family-style');
let imageBox=document.querySelectorAll('.image_box');

let paintBTN=document.querySelector('.color_btn');
let BackBTN=document.querySelector('.right_p');
let SignBTN=document.querySelector('.sign_form');

let Login=document.querySelector('.login_inp');
let Pass=document.querySelector('.pass_inp');
let SignInBtn=document.querySelector('.signIn');

let CreateBtn=document.querySelector('.Cr');

let EmptyInp=document.querySelector('.error_empt')
let error=document.querySelector('.error');


let drop_one=document.querySelector('#drop_one');
let drop_two=document.querySelector('#drop_two');
let editText=document.querySelector('#edit_text');

let saveBTN=document.querySelector('.Save-btn');
let tableBTN=document.querySelector('.table-btn');
let OlBTN=document.querySelector('.ListOL-btn');
let UlBTN=document.querySelector('.ListUL-btn');

let CountINP=document.querySelector('#count_inp');
let MarkList=document.querySelector('#mark-list');

let CreateList=document.querySelector('.create-btn-list');


let bodyCreate=document.querySelector('.body');
let list=document.createElement('ol');
bodyCreate.appendChild(list);

let countTR=document.querySelector('.table_tr');
let countTD=document.querySelector('.table_td');

let WidthTD=document.querySelector('.table_width');
let HeightTD=document.querySelector('.table_height');

let borderWidth=document.querySelector('.table_border');

let borderStyle=document.querySelector('.border_style');
let borderColor=document.querySelector('.border_color');


let ResetTable=document.querySelector('.reset-btn-table');
let CreateTable=document.querySelector('.create-btn-table');


let table=document.createElement('table');
let countLiUL=document.querySelector('#count_li');
let markUl=document.querySelector('.mark_UL');

let ListUlCreate=document.querySelector('.create-btn-list-ul');

let listUL=document.createElement('ul');
let error_ol=document.querySelector('.empt_ol');
let error_ul=document.querySelector('.empt_ul');
bodyCreate.appendChild(table);

let outModal=document.querySelector('.out-modal');
let cancelBtn=document.querySelector('.cancel_btn');
let OUTbtn=document.querySelector('.out_btn');
let inHeader=document.querySelector('.in_header');
let modal4=document.querySelector('.m4');

let error_table=document.querySelector('.empt_tabl');


// Задання списпку з розміром шрифта 
for (let i=0; i<dropdownItem.length;i++){
    dropdownItem[i].style.fontSize = ArrTextSize[i]+'px';
}


// Задання кольору боксів тексту та бекграунду
for(let i=0;i<ColorBox.length;i++){
    ColorBox[i].style.background=ArrColorBox[i];
    
}
for(let i=0;i<ColorBox2.length;i++){
    ColorBox2[i].style.background=ArrColorBox[i];

}


// Перемикання кнопок Колір.Картинка.Файл
colorBTN.addEventListener('click',()=>{
    modal1.style.display='grid';
    modal2.style.display='none';
    modal3.style.display='none';
})
imgBTN.addEventListener('click',()=>{
    modal1.style.display='none';
    modal2.style.display='grid';
    modal3.style.display='none';
})
filesBTN.addEventListener('click',()=>{
    modal1.style.display='none';
    modal2.style.display='none';
    modal3.style.display='block';
})


// Функція зміни стилю тексту
let FontStyle = function() {
    let ChangeBold  = true; 
    B_btn.addEventListener("click", function() { 
        if (ChangeBold) { 
            text.style.fontWeight = 'bold'; 
            ChangeBold  = false; 
         } 
        else { 
            text.style.fontWeight = 'unset'; 
            ChangeBold  = true; 
        } 
    });

    let ChangeItalic  = true; 
    I_btn.addEventListener("click", function() { 
        if (ChangeItalic) { 
            text.style.fontStyle = 'italic'; 
            ChangeItalic  = false; 
        } 
        else { 
            text.style.fontStyle = 'unset'; 
            ChangeItalic  = true; 
        } 
    });
    let ChangeUnder  = true; 
    U_btn.addEventListener("click", function() { 
        if (ChangeUnder) 
    { 
        text.style.textDecoration = 'underline'; 
        ChangeUnder  = false; 
    } 
    else { 
        text.style.textDecoration = 'none'; 
        ChangeUnder  = true; 
    } 
    });

    let ChangeS  = true; 
    S_btn.addEventListener("click", function() { 
        if (ChangeS) 
    { 
        text.style.textDecoration = 'line-through'; 
        ChangeS = false; 
    } 
    else { 
        text.style.textDecoration= 'none'; 
        ChangeS  = true; 
    } 
    });

}
FontStyle();


// Функція вирівнювання тексту
let TextAlign=function(){
    StTxtBtn.addEventListener('click', ()=>{
    text.style.textAlign   = 'start';
    });

    CenTxtBtn.addEventListener('click', ()=>{
    text.style.textAlign   = 'center';
    });

    EndTxtBtn.addEventListener('click', ()=>{
    text.style.textAlign   = 'end';
    });
}
TextAlign();




// Зміна розміру тексту
let ChangeSize=function(){
    for(let i=0; i<dropdownItem.length; i++){
        dropdownItem[i].addEventListener('click',()=>{
            text.style.fontSize=ArrTextSize[i]+'px';
        })  
    }
}
ChangeSize();



// Змінна шрифту тексту
let ChangeFamily=function(){
    for(let i=0;i<familyStyle.length;i++){
        familyStyle[i].addEventListener('click',()=>{
            text.style.fontFamily=familyStyle[i].innerHTML;
        })
    }
}
ChangeFamily();

// Зміна кольору тексту
for(let i=0;i<ColorBox.length;i++){
    ColorBox[i].addEventListener('click',()=>{
        text.style.color=ArrColorBox[i];
    })
}
// Зміна фону тексту
for(let i=0;i<ColorBox2.length;i++){
    ColorBox2[i].addEventListener('click',()=>{
        mainBlock.style.backgroundColor=ArrColorBox[i];
        mainBlock.style.backgroundImage='none';
    })
}

// Зміна фону тексту на картинку
let ArrImage=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg']
for(let i=0;i<imageBox.length;i++){
    imageBox[i].addEventListener('click',()=>{
    mainBlock.style.backgroundImage=`url(${ArrImage[i]})`
    })
}


// Змiна фону на файл
let inpFile=document.querySelector('.form-control');
inpFile.addEventListener('change',()=>{
    // mainBlock.style.backgroundImage=`url(${inpFile.value})`;
    console.log(inpFile.files);

})



let signModal=document.querySelector('.modal_sign');
// Перевірка полів регестрації
SignInBtn.addEventListener('click',()=>{
    if(Login.value=='' || Pass.value==''){
        // console.log('neok');
        EmptyInp.style.display='block';
        error.style.display='none';
    }
    else if(/admin$/.test(Login.value)==false){
        error.style.display='block';
        EmptyInp.style.display='none';
        console.log(/admin/.test(Login.value));
    }
    else if(/admin$/.test(Pass.value)==false){
        error.style.display='block';
        EmptyInp.style.display='none';
        console.log(/admin/.test(Pass.value));
    }
    else {
        CreateBtn.disabled=false;
        EmptyInp.style.display='none';
        error.style.display='none';
        signModal.style.display='none';
    }
    if(CreateBtn.disabled==false){
        inHeader.style.display='none';
        modal4.style.display='none';
        outModal.style.display='block';
    }

})

cancelBtn.addEventListener('click', function(){
    signModal.style.display = 'none';
})

// Кнопка SignOut
OUTbtn.addEventListener('click', function(){
    CreateBtn.disabled=true;
    inHeader.style.display='block';
    modal4.style.display='flex';
    outModal.style.display='none';
    Login.value='';
    Pass.value='';

})

// Вікно створення таблиць та списків
CreateBtn.addEventListener('click',()=>{
    text.style.display="none";
    editText.style.display="block";
    editText.innerHTML=text.innerHTML;
    CreateBtn.style.display='none';
    B_btn.style.display="none";
    I_btn.style.display="none";
    U_btn.style.display="none";
    S_btn.style.display="none";
    StTxtBtn.style.display="none";
    CenTxtBtn.style.display="none";
    EndTxtBtn.style.display="none";
    drop_one.style.display="none";
    drop_two.style.display="none";
    paintBTN.style.display="none";
    BackBTN.style.display="none";
    SignBTN.style.display="none";
    saveBTN.style.display="block";
    tableBTN.style.display="block";
    OlBTN.style.display="block";
    UlBTN.style.display="block";
})  

// Редагування тексту
saveBTN.addEventListener('click',()=>{
    text.innerHTML=editText.value;
    text.style.display="block";
    editText.style.display="none";
    CreateBtn.style.display='block';
    B_btn.style.display="block";
    I_btn.style.display="block";
    U_btn.style.display="block";
    S_btn.style.display="block";
    StTxtBtn.style.display="block";
    CenTxtBtn.style.display="block";
    EndTxtBtn.style.display="block";
    drop_one.style.display="block";
    drop_two.style.display="block";
    paintBTN.style.display="block";
    BackBTN.style.display="block";
    SignBTN.style.display="block";
    saveBTN.style.display="none";
    tableBTN.style.display="none";
    OlBTN.style.display="none";
    UlBTN.style.display="none";
})


//   Створення списку ol
// Перевіркае полів списку
CreateList.addEventListener('click',()=>{
    for(let i=0;i<CountINP.value;i++){
        console.log(CountINP.value);
        let li=document.createElement('li');
        list.appendChild(li);
        if(MarkList.value=='A'){
            li.style.listStyleType='upper-alpha';
        }
        else if(MarkList.value=='a'){
            li.style.listStyleType='lower-alpha';
        }
        else if(MarkList.value=='1'){
            li.style.listStyleType='decimal';
        }
        else if(MarkList.value=='i'){
            li.style.listStyleType='lower-roman';
        }
        else if(MarkList.value=='I'){
            li.style.listStyleType='upper-roman';
        }
        
        li.innerHTML='Item';
        
    } 
    if(/^$/.test(CountINP.value)==true){
        error_ol.style.display='block';
    }
    else if(/\d/.test(CountINP.value)==true){
        editText.innerHTML+=bodyCreate.innerHTML;
        error_ol.style.display='none';
    }
    else {
        error_ol.style.display='block';
    }
   
})


//   Створення списку ul
// Перевіркае полів списку
bodyCreate.appendChild(listUL);
ListUlCreate.addEventListener('click',()=>{
    for(let i=0;i<countLiUL.value;i++){
        console.log(countLiUL.value);
        let li=document.createElement('li');
        listUL.appendChild(li);
        li.style.listStyleType=markUl.value;
        li.innerHTML='Item';
    }
    if(/^$/.test(countLiUL.value)==true){
        error_ul.style.display='block';
    }
    else if(/\d/.test(countLiUL.value)==true){
        editText.innerHTML+=bodyCreate.innerHTML;
        error_ul.style.display='none';
    }
    else {
        error_ul.style.display='block';
    } 
    
})


// Створення таблиці
let createTr=function(TR,TD,widthTd,heightTd,widBor,typebor,cBor){
    TR=countTR.value;
    TD=countTD.value;
    widthTd = WidthTD.value;
    heightTd = HeightTD.value;
    typebor=borderStyle.value;
    widBor=borderWidth.value;
    cBor=borderColor.value;
    for(let i=0;i<TR; i++){ 
        let trBlock=document.createElement('tr');
        table.appendChild(trBlock);
        for(let i=0;i<TD; i++){ 
           let tdBlock=document.createElement('td');
           trBlock.appendChild(tdBlock);
           tdBlock.style.width=widthTd +'px';
           tdBlock.style.height=heightTd + 'px';
           tdBlock.style.borderWidth=widBor + 'px';
           tdBlock.style.borderStyle=typebor;
           tdBlock.style.borderColor=cBor;
          tdBlock.innerHTML='TD';
        } 
    }
}

// Перевіркае полів таблиць
CreateTable.addEventListener('click',()=>{
    console.log(/\d/.test(countTR.value && countTD.value && WidthTD.value && HeightTD.value && borderWidth.value));
     if(/\d/.test(countTR.value && countTD.value && WidthTD.value && HeightTD.value && borderWidth.value)==true){
        createTr();   
        editText.innerHTML+=bodyCreate.innerHTML;
        error_table.style.display='none';
    }
    else if(/^$/.test(countTR.value && countTD.value && WidthTD.value && HeightTD.value && borderWidth.value)==true){
        error_table.style.display='block';
    }
    else{
        error_table.style.display='block';
    }
})


