
var arr  = Array.from(Array(101).keys());
arr.splice(0,2);
console.log(arr);
var p = 2;

    for(var key of arr){
        var res = key;
        res = res * p;
       var indexRes = arr.indexOf(res);
       arr.splice(indexRes, 1);
       console.log(arr);
    }


//
// var arr = [5, 4, 3, 8, 0];
//
//
//
// function filterRange(arr, a, b) {
//     var result, first, last, second;
//     first = arr.indexOf(a);
//     last = arr.indexOf(b);
//
//     if (first > last){
//         result = arr.splice(last, first +1);
//     }
//     else {
//         result = arr.splice(first, last +1);
//     }
//
//     return result;
// }
//
//
// var filtered = filterRange(arr, 5, 3);


// теперь filtered = [5, 4, 3]
// arr не изменился


//
// function find(arr, value) {
//
//    for(let key of arr){
//            if (key === value){
//                console.log(key);
//                return value;
//        }
//        console.log(-1);
//    }
//
// }
//
//
// var arr = ["test", 2, 1.5, false];
//
// find(arr, "test"); // 0
// find(arr, 2); // 1
// find(arr, 1.5); // 2
//
// find(arr, 0); // -1
//
//
//
//
//




//
//
//
// function arrCount() {
//
//     let result = 0;
//     var arr = [];
//     while (true){
//
//         let input  = prompt("Введите число");
//
//         if(input === '' || input === null || isNaN(input)) break;
//         arr.push(+input);
//         }
//
//     for(let key of arr){
//         console.log(typeof key);
//         result += key;
//     }
//
//     alert(result);
//
// }
//
// arrCount();

// const MIN = 0;
// const MAX = 3;
//
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//
// var rand = MIN + Math.floor(Math.random() * (MAX + 1 - MIN));
//
// alert(arr[rand]);



// let  styles  = ['Джаз', 'Блюз'];
//
// styles.push('Рок-н-Ролл');
// console.log(styles);
// styles[styles.length -2] = 'Классика';
// console.log(styles);
// console.log(styles.shift());
// styles.unshift('Реги', 'Реп');
// console.log(styles);
//

//
//
//
// let goods  = [1, 2, 3, 3 , 'sdf1', 'ssdf', 324];
//
//
// goods[goods.length] = 'тест';
//
// console.log(goods);
//


//
// let goods  = [1, 2, 3, 3 , 'sdf1', 'ssdf', 324];
//
//
// let len =  goods[goods.length -1];
//
// console.log(len);

//
//
// function multiplyNumeric(obj) {
//     var key, resalt = 0;
//
//
//     for (key in obj){
//         if(isNumeric(obj[key])){
//             obj[key] *=  2;
//         }
//         else {
//             break;
//         }
//
//     }
//
// }
//
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }
//
//
// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
//
// multiplyNumeric(menu);
// alert(menu['width']);
// alert(menu['height']);
//


//
// "use strict";
//
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
//
//
// function biggestSum(obj) {
//     let key, result = 0;
//
//     for (key in obj){
//         if(obj[key] > result)
//         {
//             result = obj[key];
//         }}
//
//         return result;
// }
//
// alert(biggestSum(salaries));


//
// "use strict";
//
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
// function totalSum(obj) {
//     let key, result =0;
//     for (key in obj){
//
//         result += obj[key];
//     }
//
//     return result;
// }
//
// alert(totalSum(salaries));
//

//
// var obj;
//
// function isEmpty(obj) {
//     let key;
//     for (key in obj){
//         return false;
//     }
// return true;
// }
// var schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "подъём";
//
// alert( isEmpty(schedule) ); // false


//
// var user = {};
//
// user.name = 'Вася';
// user.surname = 'Петров';
//









//
// var input = prompt('Введите текст');
//
// function acronymize(input) {
//     input = input.toUpperCase();
//     var firstChar = input.charAt(0);
//     var i = 0;
//     var indexChar = 0, addChar;
//     while (i < input.length){
//         indexChar = input.indexOf(' ', indexChar) + 1;
//         if (indexChar - 1 ===-1 ) break;
//         addChar = input.charAt(indexChar);
//         firstChar += '.' + addChar;
//         ++i;
//     }
//
//     return firstChar;
//
// }
//
// alert(acronymize(input));






// var password;
//
// setPassword(prompt('Введите новый пароль'));
//
//
// function setPassword(password) {
//     const MIN_LENGHT = 8;
//     var digitReg = /[1-9]/g;
//     var spaceIndex= ' ';
//
//     (password.length < MIN_LENGHT) ?  passAlert('Длина пароля должна быть больше 8 символов') :
//     (password === password.toLowerCase()) ?  passAlert('Пароль не содержит букв в верхнем регистре') :
//     (password.search(digitReg) === -1) ?  passAlert('Пароль должен содержать хотя бы одну цифру') :
//     (password.indexOf(spaceIndex) !==  -1 ) ?  passAlert('Пароль не может содержать пробелы') :
//      passAlert('Пароль успешно принят');
//
//     function passAlert(error) {
//         alert(error);
//     }
//
// }
//



/*
2) Напишите функцию `reverse(str)`, которая получает строку, и "разворачивает" ее, то есть возвращает новую строку, состоящую из символов первой в обратном порядке.
 */
//
// var input = prompt('Введите текст');
//
// function reverse(input) {
//     var inputRev = input.split('').reverse().join('');
//     return inputRev;
// }
//
// alert(reverse(input));
//

/*
Факультативные задачи:
1) Написать функцию ACRONYMIZE, которая принимает аргумент-строку, и возвращает ее аббревиатуру (акроним).
Предположим, что все входные данные – строки из нескольких слов, состоящих только из латинских буквы.
Пример: acronymize('learn javascript ru') -> 'L.J.R.'
 */

// var input = prompt('Введите текст');
//
// function acronymize(input) {
//     input = input.toUpperCase();
//     var firstChar = input.charAt(0);
//     var i = 0;
//     var indexChar = 0, addChar;
//     while (i < input.length){
//         indexChar = input.indexOf(' ', indexChar) + 1;
//         if (indexChar - 1 ===-1 ) break;
//         addChar = input.charAt(indexChar);
//         firstChar = firstChar + '.' + addChar;
//         ++i;
//     }
//
//     return firstChar;
//
// }
//
// alert(acronymize(input));









// var input;
//
// function checkSpam(input) {
//
//     var value = input.toLowerCase();
//
//   return !!(~value.indexOf('xxx') || ~value.indexOf('viagra'));
// }
//
//
// checkSpam('test');
//
//
//
//





// var input;
//
// function checkSpam(input) {
//     if(input.search('XXX' && 'viagra') !== -1){
//         alert('true');
//         return true;
//     }
//     else {
//         alert('false');
//         return false;
//     }
//
// }
//
// checkSpam('test XXX');
//
//



// var input;
//
//
// function upperChar(input) {
//     var changeChar = input.charAt(0).toUpperCase() + input.slice(1);
//     alert(changeChar);
// }
//
//
// upperChar('вася');
//
//
//
//
//
//



// var input,firstChar;
//
// function changeChar(input) {
//
//     var firstChar = input.charAt(0);
//     input = input.slice(1);
//     firstChar = firstChar.toUpperCase();
//     alert(firstChar+input);
// }
//
// changeChar('');
//



// var input;
//
// //input = prompt('Введите название');
//
// function acronymize(input){
//
//     var i =0;
//     input.trim();
//     if (input.indexOf(' ') !== -1){
//
//         var test = input.
//     }
//
//
//
//     var test = input.indexOf(' ');
//     input = input.toUpperCase();
//     var test2 = test + 1;
//
//     alert(input.charAt(test2));
//
// }
//
//
// acronymize('learn javascript ru');
//
//
//
//
//
//
//

















// var input;
//
// //input = prompt('Введите название');
//
// function acronymize(input){
//     var space = ' ';
//     var text = input.trim();
//     text = text.toUpperCase();
//     var arrayText = text.split(space);
//     var arrayFirstCharDot;
//     var i = 0;
//
//     while (i !== arrayText.length) {
//         var test = arrayText.push(arrayText[i].charAt(0));
//         if (i !== arrayText.length){
//             var removedItem = arrayText.splice(0, 1);
//         }
//         ++i;
//     }
//
//    arrayFirstCharDot = arrayText.join('.');
//    alert(arrayFirstCharDot);
//    var test2 = arrayFirstCharDot.toString();
//
//    alert(test2);
//
// }
//
//
// acronymize('learn javascript ru');
//
//
//
//







// var res;
//
//
// xx = prompt('Первое число');
// nn = prompt("Второе число");
//
//
// function pow(x,n) {
//     res = 1;
//     for (var i = 0; i < n; i++){
//         res = res * x ;
//     }
//
//     alert(res);
// }
//
//
// pow(xx,nn);
//
//

//
// function min(a,b) {
//
//     return (a > b) ? alert(a) : alert(b);
//
// }
//
// min(3,6);


//
//
// function checkAge(age) {
//    return (age > 18) ?  true :  confirm('Родители разрешили?');
// }
//
// function checkAge(age) {
//     return (age > 18)  ||  confirm('Родители разрешили?');
// }
//


// function checkAgW(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }











// var a = +prompt('a?', '');
//
// switch (a){
//         case 0:
//             alert( 0 );
//             break;
//         case 1:
//             alert( 1 );
//             break;
//     case 2:
//     case 3:
//         alert( '2,3' );
//         break;
// }