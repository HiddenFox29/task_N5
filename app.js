let pswd      = "qwert1234";
let numberWin = 29;

// вход через пароль
let answer = prompt('Введите пароль');
if (pswd === answer) {
    document.write('secret content');
} else {
    alert('Увы');
};

// игра
let answerNumber = Number(prompt('Введите число'));

if (numberWin === answerNumber) {
    alert("win");
};

if (numberWin < answerNumber){
    alert('Меньше');
};

if(numberWin > answerNumber) {
    alert('Больше');
};


