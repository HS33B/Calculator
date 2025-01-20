const but1 = document.querySelector('#but1');
const but2 = document.querySelector('#but2');
const but3 = document.querySelector('#but3');
const but4 = document.querySelector('#but4');
const but5 = document.querySelector('#but5');
const but6 = document.querySelector('#but6');
const but7 = document.querySelector('#but7');
const but8 = document.querySelector('#but8');
const but9 = document.querySelector('#but9');
const but0 = document.querySelector('#but0');
const butDot = document.querySelector('#butDot');
const butPlus = document.querySelector('#butPlus');
const butMinus = document.querySelector('#butMinus');
const butMultiply = document.querySelector('#butMultiply');
const butDivide = document.querySelector('#butDivide');
const display = document.querySelector('#display');
const butEqual = document.querySelector('#butEqual');
const butAC = document.querySelector('#butAC');
const butSquare = document.querySelector('#butSquare');

let val11 = '';
let val22 = '';
let val33 = '';
let val1Arr = [];
let val2Arr = [];
let val3Arr = [];
let operator;
let num;
let result;

but1.addEventListener('click', ()=> {
    num = '1';
    if (val1Arr.length === 0) {
        val1Arr.push('1');
    }
    else if (operator == undefined) {
        val1Arr.push('1');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('1');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but2.addEventListener('click', ()=> {
    num = '2';
    if (val1Arr.length === 0) {
        val1Arr.push('2');
    }
    else if (operator == undefined) {
        val1Arr.push('2');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('2');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but3.addEventListener('click', ()=> {
    num = '3';
    if (val1Arr.length === 0) {
        val1Arr.push('3');
    }
    else if (operator == undefined) {
        val1Arr.push('3');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('3');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but4.addEventListener('click', ()=> {
    num = '4';
    if (val1Arr.length === 0) {
        val1Arr.push('4');
    }
    else if (operator == undefined) {
        val1Arr.push('4');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('4');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but5.addEventListener('click', ()=> {
    num = '5';
    if (val1Arr.length === 0) {
        val1Arr.push('5');
    }
    else if (operator == undefined) {
        val1Arr.push('5');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('5');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but6.addEventListener('click', ()=> {
    num = '6';
    if (val1Arr.length === 0) {
        val1Arr.push('6');
    }
    else if (operator == undefined) {
        val1Arr.push('6');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('6');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but7.addEventListener('click', ()=> {
    num = '7';
    if (val1Arr.length === 0) {
        val1Arr.push('7');
    }
    else if (operator == undefined) {
        val1Arr.push('7');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('7');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but8.addEventListener('click', ()=> {
    num = '8';
    if (val1Arr.length === 0) {
        val1Arr.push('8');
    }
    else if (operator == undefined) {
        val1Arr.push('8');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('8');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but9.addEventListener('click', ()=> {
    num = '9';
    if (val1Arr.length === 0) {
        val1Arr.push('9');
    }
    else if (operator == undefined) {
        val1Arr.push('9');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('9');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
but0.addEventListener('click', ()=> {
    num = '0';
    if (val1Arr.length === 0) {
        val1Arr.push('0');
    }
    else if (operator == undefined) {
        val1Arr.push('0');
    }
    else if (result != undefined) {
        contiOperate();
    }
    else{
        val2Arr.push('0');
    }
    let val1 = '';
    for (i=0; i<val1Arr.length; i++) {
        val1 = val1 + val1Arr[i];
    }
    let val2 = '';
    for (i=0; i<val2Arr.length; i++) {
        val2 = val2 + val2Arr[i];
    }
    val22 = val2;
    val11 = val1;
    if (val33 == '') {
        displayText();
    }
})
butDot.addEventListener('click', () => {
    num = '.';
    if (!val1Arr.includes('.')) {
        if (val1Arr.length === 0) {
            val1Arr.push('.');
            
        }
        else if (operator == undefined) {
            val1Arr.push('.');
        }
        else if (result != undefined) {
            contiOperate();
        }
        else{
            val2Arr.push('.');
        }
        let val1 = '';
        for (i=0; i<val1Arr.length; i++) {
            val1 = val1 + val1Arr[i];
        }
        let val2 = '';
        for (i=0; i<val2Arr.length; i++) {
            val2 = val2 + val2Arr[i];
        }
        val22 = val2;
        val11 = val1;
    }
    else if (val1Arr.includes('.') && !val2Arr.includes('.')
    && operator !== undefined){
        val2Arr.push('.');
        let val1 = '';
        for (i=0; i<val1Arr.length; i++) {
            val1 = val1 + val1Arr[i];
        }
        let val2 = '';
        for (i=0; i<val2Arr.length; i++) {
            val2 = val2 + val2Arr[i];
        }
        val22 = val2;
        val11 = val1;
    }
    if (val33 == '') {
        displayText();
    }
})
butPlus.addEventListener('click', () => {
    if (val11 != '' && operator == undefined) {
        operator = '+';
        display.textContent = '';
        display.textContent = display.textContent +' '+ val11 +' '+ operator;
    }
    else if (result !== undefined) {
        operator = '+';
        display.textContent = '';
        display.textContent = result + ' ' + operator;
    }
})
butMinus.addEventListener('click', () => {
    if (val11 != '' && operator == undefined) {
        operator = '-';
        display.textContent = '';
        display.textContent = display.textContent +' '+ val11 +' '+ operator +' ';
    }
    else if (result !== undefined) {
        operator = '-';
        display.textContent = '';
        display.textContent = result + ' ' + operator;
    }
})
butMultiply.addEventListener('click', () => {
    if (val11 != '' && operator == undefined) {
        operator = 'x';
        display.textContent = '';
        display.textContent = display.textContent +' '+ val11 +' '+ operator;
    }
    else if (result !== undefined) {
        operator = 'x';
        display.textContent = '';
        display.textContent = result + ' ' + operator;
    }
})
butDivide.addEventListener('click', () => {
    if (val11 != '' && operator == undefined) {
        operator = '÷';
        display.textContent = '';
        display.textContent = display.textContent +' '+ val11 + ' ' + operator;
    }
    else if (result !== undefined) {
        operator = '÷';
        display.textContent = '';
        display.textContent = result + ' ' + operator;
    }
})
function displayText() {
    if (operator == undefined) {
        display.textContent = '';
        display.textContent = val11;
    }
    else{
        display.textContent = '';
        display.textContent = val11 + ' ' + operator +' '+ val22;
    }
}
function operate() {
    if (result == undefined) {
        if (operator == '+') {
            result =  Number(val11) + Number(val22);
            display.textContent = '';
            display.textContent = result;
        }
        else if (operator == '-') {
            result =  Number(val11) - Number(val22);
            display.textContent = '';
            display.textContent = result;
        }
        else if (operator == 'x') {
            result =  Number(val11) * Number(val22);
            display.textContent = '';
            display.textContent = result;
        }
        else if (operator == '÷') {
            if (val22 == 0) {
                display.textContent = '';
                display.textContent = 'YouSucker!';
            }
            else {
                result =  Number(val11) / Number(val22);
                display.textContent = '';
                display.textContent = result;
            }    
        }
    }    
    else {
        if (operator == '+') {
            result =  Number(result) + Number(val33);
            display.textContent = '';
            display.textContent = result;
        }
        else if (operator == '-') {
            result =  Number(result) - Number(val33);
            display.textContent = '';
            display.textContent = result;
        }
        else if (operator == 'x') {
            result =  Number(result) * Number(val33);
            display.textContent = '';
            display.textContent = result;
        }
        else if (operator == '÷') {
            if (val33 == 0) {
                display.textContent = '';
                display.textContent = 'YouSucker!';
            }
            else {
                result =  Number(val11) / Number(val33);
                display.textContent = '';
                display.textContent = result;
            }  
        }
        val3Arr = [];
    }
}
butEqual.addEventListener('click', () => {
    if (val1Arr.length>0 && val2Arr.length>0 && operator != undefined) {
        operate();
    }
})
butAC.addEventListener('click', () => {
    location.reload();
})
function contiOperate() {
    val3Arr.push(num);
    let val3 = '';
    for (i=0; i<val3Arr.length; i++) {
        val3 = val3 + val3Arr[i];
    }
    val33 = val3;
    display.textContent = '';
    display.textContent = result + ' ' + operator + ' ' + val33;
}