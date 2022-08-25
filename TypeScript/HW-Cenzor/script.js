var Input = document.querySelector('.word');
var Forbidden = Input;
var Add = document.querySelector('.add');
var AddBtn = Add;
var Reset = document.querySelector('.reset');
var ResetBtn = Reset;
var Area = document.querySelector('.area');
var TextArea = Area;
var Cenzor = document.querySelector('.cenzor');
var CenzorBtn = Cenzor;
var Word = document.querySelector('.badWords');
var BadWord = Word;
var arrayWord = [];
var reg;
AddBtn.addEventListener('click', function () {
    if (Forbidden.value != '') {
        Forbidden.style.border = '2px solid rgb(162, 160, 160)';
        Forbidden.placeholder = 'word here...';
        arrayWord.push(Forbidden.value);
        BadWord.innerHTML += ' ' + Forbidden.value + ', ';
        Forbidden.value = '';
    }
    else {
        Forbidden.style.border = '2px solid red';
        Forbidden.placeholder = 'Please write a word!';
    }
});
ResetBtn.addEventListener('click', function () {
    BadWord.innerHTML = 'Bad words: ';
    arrayWord = [];
    TextArea.value = '';
});
CenzorBtn.addEventListener('click', function () {
    if (TextArea.value != '') {
        for (var i = 0; i < arrayWord.length; i++) {
            TextArea.style.border = '2px solid rgb(162, 160, 160)';
            TextArea.placeholder = 'text here...';
            var ValArea = TextArea.value;
            reg = new RegExp(arrayWord[i], 'i');
            var array = reg.exec(ValArea);
            var typearray = array;
            var splitword = typearray[0].split('');
            var wordMet = splitword.map(function (el) {
                el = '*';
                return el;
            });
            var starWordNew = wordMet.join('');
            var newArea = ValArea.replace(reg, starWordNew);
            TextArea.value = newArea;
        }
    }
    else {
        TextArea.style.border = '2px solid red';
        TextArea.placeholder = 'Please write a text!';
    }
});
