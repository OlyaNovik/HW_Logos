
let Input = document.querySelector('.word');
const Forbidden: HTMLInputElement = Input as  HTMLInputElement;

let Add = document.querySelector('.add');
const AddBtn: HTMLElement = Add as HTMLElement;

let Reset = document.querySelector('.reset');
const ResetBtn: HTMLElement = Reset as HTMLElement;

let Area = document.querySelector('.area');
const TextArea: HTMLTextAreaElement = Area as HTMLTextAreaElement;

let Cenzor = document.querySelector('.cenzor');
const CenzorBtn: HTMLElement = Cenzor as HTMLElement;

let Word = document.querySelector('.badWords');
const BadWord: HTMLElement = Word as HTMLElement;

let arrayWord: string[] = [];
let reg: RegExp;

AddBtn.addEventListener('click',()=>{
    if(Forbidden.value !=''){
        Forbidden.style.border='2px solid rgb(162, 160, 160)';
        Forbidden.placeholder ='word here...'
        arrayWord.push(Forbidden.value);
        BadWord.innerHTML += ' ' + Forbidden.value +', ';
        Forbidden.value=''; 
    }
    else{
        Forbidden.style.border='2px solid red';
        Forbidden.placeholder ='Please write a word!'
    }
    
    
})
ResetBtn.addEventListener('click', ()=>{
    BadWord.innerHTML='Bad words: ';
    arrayWord=[];
    TextArea.value='';
})



CenzorBtn.addEventListener('click',() =>{
    if(TextArea.value !=''){ 
       for(let i=0;i<arrayWord.length;i++){
        TextArea.style.border='2px solid rgb(162, 160, 160)';
        TextArea.placeholder ='text here...'
        let ValArea = TextArea.value;
        reg = new RegExp(arrayWord[i], 'i');
        let array = reg.exec(ValArea);
        let typearray: RegExpExecArray = array as RegExpExecArray;
        let splitword = typearray[0].split('');
        let wordMet = splitword.map(el =>{
            el='*';
            return el;  
        })
        let starWordNew = wordMet.join('');
        let newArea = ValArea.replace(reg,starWordNew);
        TextArea.value = newArea;  
        } 
    }
    else{
        TextArea.style.border='2px solid red';
        TextArea.placeholder ='Please write a text!'
    }   
})

