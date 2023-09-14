// if (4 == 4) {
// console.log('ok');
// } else {
// console.log ('Error');
// }

// const num = 50;

// if (num < 49){
//     console.log ('Error');
// }  else if (num > 100) {
//     console.log('Много');
// }else {
//     console.log('Ok');
// }

// // Тернарный оператор
// (num === 50) ? console.log('ok!') : console.log('Error');

// const num = '50';

// switch (num) {
//   case '49':
//     console.log("Неверно");
//     break;
//   case '100':
//     console.log("Неверно");
//     break;
//   case '50':
//     console.log("В точку!");
//     break;
//   default:
//     console.log("Не в этот раз");
//     break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
// console.log ('Я сыт!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'qweqewqeqwewqeqe');

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//   console.log("Все довольны");
// } else {
//   console.log(`Мы уходим`);
// }

// console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

// let johnReport,
//   alexReport,
//   samReport,
//   mariaReport = "Done";

// console.log(johnReport || alexReport || samReport || mariaReport);

// let num = 50;

// while(num<=55){
//     console.log(num);
//     num++;
// }
// do{
//     console.log(num);
// //     num++;
// }
// while(num < 55);

// ЦИКЛИ

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }
    //    ЦИКЛ В ЦИКЛЕ И МЕТКИ

for (let i = 0; i < 3; i++) {
  console.log(i);

  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for(let i = 1; i < lenght; i++){

//     for (let j =0; j < i; j++){
//         result += "*";
//     }
    
//     result += '\n';
// }


// console.log  (result);

                                --------------------ПРАКТИЧНІ ЗАВДАННЯ ЦИКЛИ!!!------------------------

//При помощи цикла выведите числа от 5 до 10 в консоль. 
// 5 и 10 включительно. 
// Цикл можно использовать любой.
function firstTask() {
    for(let i = 5; i <11;i++){
        console.log (i);
    }
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. 
// В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTask() {
for(let i = 20; i >10; i--){
        if (i ===13)
        break;
    }
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
function thirdTask() {
   for(let i = 2;i<=10;i++){
       if(i % 2 === 0){
           console.log(i);
       }
   }
   
    
    
}

// Перепишите цикл  for на вариант с while.
//  Результат должен остаться точно таким же. 
//  Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  let i = 2;
  
  while (i <=16) {
      if (i % 2 === 0){
      i++;
      continue;
      } else {
          console.log(i);
      }
      i++;
    }
  }

// Заполните массив цифрами от 5 до 10 включительно.
//  Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
    const arrayOfNumbers = [];

     for (let i = 5;i < 11; i++){
         arrayOfNumbers[i - 5] = i;
     }


console.log(arrayOfNumbers);

    // Не трогаем
    return arrayOfNumbers;
}