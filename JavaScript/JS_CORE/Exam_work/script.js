let fText = document.querySelector('.form_text');

let blockInp = document.querySelector('.block_input');
let blockStyle = document.querySelector('.block_style');
let blockText=document.querySelector('.marg_text');
let fInp = document.forms['form_input'];
let fBtn = document.forms['form_btn'];
let fStyle = document.forms['form_style'];
let fTable =document.querySelector('.table_bl');

let edit = fBtn.btn_edit;
let style = fBtn.btn_style;
let redact = fInp.redactor;
let save = fInp.btn_save;
let add = fInp.btn_add;

let size = document.querySelectorAll('.font_size');
let fontFamily =fStyle.sel_font;
let colorTextbtn=fStyle.btn_colorText;
let backbtn=fStyle.btn_background;
let boldT=fStyle.bold_text;
let cursivT=fStyle.cursiv_text;

let colorB=document.querySelectorAll('.color');
let colorBack=document.querySelectorAll('.color2');
let BoxOFColors=document.querySelector('.box_color');
let BoxOFBack=document.querySelector('.box_back');

let color = ['red','green','blue','black','yellow','pink','white','purple','darkcyan'];

let Choose =document.querySelector('.block_choose');
let radioT =document.forms['table_list'];
let tabLis = radioT.tbl;

let tr = fTable.inp_tr;
let td = fTable.inp_td;
let WidthTab = fTable.Width;
let HeightTab = fTable.Height;
let WidthBorder= fTable.Width_border;
let TypeBord = fTable.type_border;
let ColorBorder = fTable.color_border;
let BtnTable = fTable.create_btn;
let tableBody= document.querySelector('.body');
let table=document.createElement('table');
tableBody.appendChild(table);

let flist = document.querySelector('.list_bl');
let countLI = flist.count_li;
let marks = flist.marks;
let listbtn =flist.list_btn;
let list=document.createElement('ul');
tableBody.appendChild(list);

// Button Edit
edit.addEventListener('click',()=>{
    fInp.style.display="block";
    redact.innerHTML=fText.innerHTML;
    blockInp.style.display="block";
    blockStyle.style.display="none";
})
// Button Save
save.addEventListener('click',()=>{
    console.log(redact.value);
    fText.innerHTML=redact.value;
    fInp.style.display="none";
})

// Button Style
style.addEventListener('click',()=>{
    blockInp.style.display="none";
    blockStyle.style.display="flex";
})
// РОЗМІР ТЕКСТУ
size.forEach(item =>{
    item.addEventListener('click',()=>{
        fText.style.fontSize=item.value;
    })
})

// ШРИФТ ТЕКСТУ
fontFamily.addEventListener('change',()=>{
    fText.style.fontFamily=fontFamily.value;
})

//СТИЛЬ ТЕКСТУ
boldT.addEventListener('change',()=>{
    if(boldT.checked==true){
        fText.style.fontWeight=boldT.value;
    } else fText.style.fontWeight='lighter'
})

//СТИЛЬ ТЕКСТУ
cursivT.addEventListener('change',()=>{
    if(cursivT.checked==true){
        fText.style.fontStyle=cursivT.value;
    } else fText.style.fontStyle='normal'
})

//КОЛІР ДЛЯ БЛОКУ СТИЛЬ
for(let i=0;i<colorB.length;i++){
    colorB[i].style.background=color[i];
}
for(let i=0;i<colorBack.length;i++){
    colorBack[i].style.background=color[i];
}

//бекграунд 
backbtn.addEventListener('click',()=>{
    console.log('click');
    BoxOFColors.style.display='grid';
    BoxOFBack.style.display='none';
for(let i=0; i<colorB.length;i++){
    colorB[i].addEventListener('click',()=>{
    blockText.style.background=color[i];
     console.log('click ');
     BoxOFColors.style.display='none';
    });   
}

})

colorTextbtn.addEventListener('click',()=>{
    console.log('click');
    BoxOFBack.style.display='grid';
    BoxOFColors.style.display='none';
for(let i=0; i<colorBack.length;i++){
    colorBack[i].addEventListener('click',()=>{
    blockText.style.color=color[i];
     console.log('click ');
     BoxOFBack.style.display='none';
    });   
}
})



// table and list
add.addEventListener('click',()=>{
    blockText.style.display='none';
    fBtn.style.display='none';
    blockInp.style.display='none';
    Choose.style.display='block';
})

for(let i=0; i<tabLis.length;i++){
    tabLis[i].addEventListener('click',()=>{
        if(tabLis[i].value=='table'){
        flist.style.display='none';
        fTable.style.display ='block';
    }
    else if (tabLis[i].value =='list'){
        flist.style.display='block';
        fTable.style.display ='none';
    }
})   
}



// Функція створення таблиці 
let createTr=function(countTR,countTD,widthTd,heightTd,widBor,typebor,cBor){
    countTR=tr.value;
    countTD=td.value;
    widthTd = WidthTab.value;
    heightTd = HeightTab.value;
    typebor=TypeBord.value;
    widBor=WidthBorder.value;
    cBor=ColorBorder.value;
    for(let i=0;i<countTR; i++){ 
       let trBlock=document.createElement('tr');
        table.appendChild(trBlock);
        for(let i=0;i<countTD; i++){ 
           let tdBlock=document.createElement('td');
           trBlock.appendChild(tdBlock);
           console.log(widthTd);
           console.log(heightTd);
           tdBlock.style.width=widthTd +'px';
           tdBlock.style.height=heightTd + 'px';
           tdBlock.style.borderWidth=widBor + 'px';
           tdBlock.style.borderStyle=typebor;
           tdBlock.style.borderColor=cBor;
          tdBlock.innerHTML='TD';
        } 
    }
}
//кнопка для таблиці
BtnTable.addEventListener('click',() => {
    createTr();
    Choose.style.display='none';
    blockText.style.display='block';
    fBtn.style.display='block';
    blockInp.style.display='block';
    console.log(tableBody.innerHTML);
    redact.innerHTML+=tableBody.innerHTML;
})


// функція створення ліста
let createList=function(){
    for(let i=0;i<countLI.value; i++){ 
        let li=document.createElement('li');
        list.appendChild(li);
        li.style.listStyleType=marks.value;
        li.innerHTML='Item';
}
}
//кнопка ліста
listbtn.addEventListener('click',()=>{
    createList();
    Choose.style.display='none';
    blockText.style.display='block';
    fBtn.style.display='block';
    blockInp.style.display='block';
    redact.innerHTML+=tableBody.innerHTML;
})




