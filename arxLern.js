
// Факультативно:
//     1) Написать функции filter и map массива через метод reduce.
//     Они должны делать то же, что и методы массива filter, map, но принимая сам массив в качестве 1го аргумента.
//
//     function filter(array, callback) {} === array.filter(callback)
// function map(array, callback) {} === array.map(callback)


let arr = [1, 3, 4, 12, 6, 22, 123, 332, 7, 23];
let arrObj = [{id: 55, name: "Pol"},{id: 1, name: "Mike"},{id: 12, name: "Mark"},{id: 42, name: "John"}];
let res;



// res = arr.splice(3, 1);
// console.log(res);
// console.log(arr);
//
// res = arr.splice(4, 0, 99, 34);
// console.log(res);
// console.log(arr);

// res = arr.slice();
// console.log(res);
//
// let sliceRes = res.slice(2,3);
// console.log(arrRes);

// res = arr.concat(23,33,23,0, 324)
// console.log(res);

// arr.forEach(item => console.log(item == 23));

// arrObj.find(item => console.log(item.id == 34));
// arrObj.find(item => console.log(item.id == 55));
//    res = arrObj.find(item => item.id == 1);
//    console.log(res.name);

//  res = arrObj.filter(item => item.id >= 12);
//  //console.log(res);
//
//  res.sort(function (a, b) {
//  return a.id - b.id;
//  })
// console.log(res)
//

// res = arr.map(item => item + 23);
// console.log(res);
// res = res.map(item => item * res.length);
// console.log(res);



// res = arr.reduce(function(init, item) {
//     console.log(init);
//     return init + item;
// }, 0);


// const style = `
//   position: absolute;
//   top: -999px;
//   left: 0px;
//   right: auto;
//   bottom: auto;
//   border: 0px;
//   box-sizing: content-box;
//   word-wrap: break-word;
//   overflow: hidden;
//   height: 0px !important;
//   min-height: 0px !important;
//   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
//   font-size: 12px;
//   font-weight: 400;
//   font-style: normal;
//   letter-spacing: 0px;
//   text-transform: none;
//   word-spacing-new: 0px;
//   text-indent: 0px;
//   line-height: 20px;
//   width: 191px;
// `;
//
// function styleToObject(str) {
//
//    //str = 'position: absolute;';
//
//     let obj = {};
//
//    let splitArr = str.split(';')
//     //console.log(splitArr);
//     for (var key of splitArr){
//        let sliceStr = key.slice(3);
//        //box-sizing: content-box
//        // console.log(sliceStr);
//        //let tempArr = sliceStr.split(': ')
//         let indexSlice = sliceStr.indexOf(':');
//         let keyOfObj = sliceStr.slice(0, indexSlice);
//         //console.log(keyOfObj);
//         //position:
//         let valueOfKeyObj = sliceStr.slice(indexSlice + 2);
//         //console.log(valueOfKeyObj);
//
//       if (keyOfObj.indexOf('-') > 1)
//       {
//           //font-style
//           let indexSlice = keyOfObj.indexOf('-');
//           let firstValue = keyOfObj.slice(0, indexSlice);
//           let secondValue = keyOfObj.slice(indexSlice + 1);
//           let upperSecondChar = secondValue.toUpperCase().slice(0,1);
//               secondValue = upperSecondChar + secondValue.slice(1);
//
//           keyOfObj = firstValue + secondValue;
//           console.log(keyOfObj);
//
//          // return keyOfObj;
//       }
//
//       obj[keyOfObj] = valueOfKeyObj;
//
//       console.log(obj);
//
//     }
//
//
//
//
//
//
//    // let count =0;
//    //
//    //  while (count === -1){
//    //     let indexSplit =  str.indexOf(';', count);
//    //
//    //
//    //  }
//
//
//     /*
//       Expected result:
//       {
//         position: 'absolute',
//         boxSizing: 'content-box',
//         ...
//       }
//     */
// }
//
//   console.log(styleToObject(style));
//

//
//
//
//
//
//
// 'use strict';
//
// function deepEqual(a, b) {
//
//     if (a === b) return true;
//
//     if(typeof a !== 'object'
//         || typeof b !== 'object'
//         ||  a === null
//         || b === null) return false;
//
//
//
//     if (Object.keys(a).length !== Object.keys(b).length) return false;
//
//
//     for (let prop in a){
//         if(a.hasOwnProperty(prop) && b.hasOwnProperty(prop)){
//             if (!deepEqual(a[prop], b[prop])){
//                 return false;
//             }
//         }else {
//             return false;
//         }
//     }
// return true;
// }
//
// let a = {
//     name: 'John',
//     order: {
//         price: 20
//     },
//     age: 10
// };
//
// let b = {
//     name: 'John',
//     order: {
//         price: 20,
//     },
//     age: 10
// };
//
//
// console.assert(deepEqual(a, b) === true, 'Not ready yet');
//
// let o1 = {
//     a: 1,
//     b: 'a',
//     c: null,
//     d: undefined,
//     e: { inner: true },
// }
//
// let o2 = {
//     a: 1,
//     b: 'a',
//     c: null,
//     d: null,
//     e: { inner: true },
// }
//
// console.assert(deepEqual(o1, o2) === false, 'Not ready yet');
//
// let obj = { a: 0, b: '' };
// let sameObj = obj;
//
// console.assert(deepEqual(obj, sameObj) === true, 'Not ready yet');
//






//
// var obj = {
//     className: 'open menu'
// }
//
//
// function addClass(a, b){
//     var arr = Object.values(obj);
//     console.log(arr); //["open menu"]
//
//     // var test = arr.split(' ');
//     // console.log(test);
//
//
// }
//
//
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
//
// alert( obj.className ); // "open menu new me"
//
//
//
//
// // let names = 'Вася, Петя, Галя, Миша, Коля';
// //
// // let arr =names.split(',');
// // console.log(arr);
// //
// //     // for (var key of arr){
// //     //     console.log(arr[key])
// //     // }



//
// var mainArr  = Array.from(Array(101).keys());
// var countArr  = Array.from(Array(101).keys());
// mainArr.splice(0,2);
// countArr.splice(0,2);
//
// var p = 2;
//
// for(var key of countArr){
//     var res = key;
//     res = res * p;  //4
//     var indexRes = mainArr.indexOf(res);
//     if (indexRes === -1){
//         break;
//     }
//     mainArr.splice(indexRes, 1);
//     console.log(mainArr);
// }
//
//
// var newArrCount = mainArr.slice();
// var lastArrIndex  = newArrCount.length -1;
//
// for(p = mainArr[0] + 1; Math.pow(p,2) < mainArr[lastArrIndex]; p++ ){
//
//     for (var i = 1; i < newArrCount.length; i++){
//         var res = mainArr[i];
//         res = res * p;
//         var indexRes = mainArr.indexOf(res);
//         if (indexRes === -1){
//             break;
//         }
//         mainArr.splice(indexRes, 1);
//         console.log(mainArr);
//
//     }
//
//
// }
//
// var mainArr = [5, 4, 3, 8, 0];
//
//
//
// function filterRange(mainArr, a, b) {
//     var result, first, last, second;
//     first = mainArr.indexOf(a);
//     last = mainArr.indexOf(b);
//
//     if (first > last){
//         result = mainArr.splice(last, first +1);
//     }
//     else {
//         result = mainArr.splice(first, last +1);
//     }
//
//     return result;
// }
//
//
// var filtered = filterRange(mainArr, 5, 3);


// теперь filtered = [5, 4, 3]
// mainArr не изменился


//
// function find(mainArr, value) {
//
//    for(let key of mainArr){
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
// var mainArr = ["test", 2, 1.5, false];
//
// find(mainArr, "test"); // 0
// find(mainArr, 2); // 1
// find(mainArr, 1.5); // 2
//
// find(mainArr, 0); // -1
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
//     var mainArr = [];
//     while (true){
//
//         let input  = prompt("Введите число");
//
//         if(input === '' || input === null || isNaN(input)) break;
//         mainArr.push(+input);
//         }
//
//     for(let key of mainArr){
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
// var mainArr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//
// var rand = MIN + Math.floor(Math.random() * (MAX + 1 - MIN));
//
// alert(mainArr[rand]);



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