'use strict';


// 1 задача
// const names = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран «${names}» цена за штуку ${price} кредитов`);

// price = 2000;
// console.log(`Выбран «${names}» цена за штуку ${price} кредитов`);


// 2 задача
// let total = 100;
// total = Number(total);

// let ordered = prompt('Введите количество товаров');
// ordered = Number(ordered);

// console.log(total);
// console.log(ordered);

// if (total >= ordered) {
//    console.log('"Заказ оформлен, с вами свяжется менеджер"'); 
// }
// else {
//     total < ordered;
//     console.log('"На складе недостаточно товаров!"');
// }

// 3 задача
// const ADMIN_PASSWORD = '12345qwert';

// let message = prompt('Введите пароль');
// if (ADMIN_PASSWORD === message) {
//     console.log('Добро пожаловать');
// } else if ( message === null) {
//     console.log('Отменено пользователем!');
// }
// else {
//     message !== ADMIN_PASSWORD;
//     console.log('Доступ запрещен, неверный пароль!');
// } 
// alert(message);

// 4 задача
// let credits = 23580;
// credits = Number(credits);
// let pricePerDroid = 3000;
// pricePerDroid = Number(pricePerDroid);
// let order = prompt('Сколько дроидов Вы хотите купить?');
// const totalPrice = pricePerDroid * order;
// let remainder = credits - totalPrice;
// if (order === null) {
//     console.log('Отменено пользователем!');
// }
// else { 
//     if (credits < totalPrice) {
//         console.log('Недостаточно средств на счету!');
//     }
//     else {
//         alert(`Вы купили ${order} дроидов, на счету осталось ${remainder} кредитов.`)
//         }
// }
 
// 5 задача

// let price;
// let country = prompt('Укажите вашу страну');
// // if (country !== null) {
// //     country = country.toLowerCase();
// // }

// switch (country) {
//     case 'Китай':
//         price = 100;
//         break;
    
//     case 'Чили':
//         price = 250;
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//         break;
    
//     case 'Австралия':
//         price = 170;
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//         break;
    
//     case 'Индия':
//         price = 80;
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//         break;
    
//     case  'Ямайка':
//         price = 120;
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//         break;
    
//     default:
//         price < 0;
// }

//         console.log(`Доставка в ${country} будет стоить ${price} кредитов`);

// 6 задача
// let country = prompt("Enter country");

// if (country!==null) {
//     country = country.toLowerCase();
// }

// let price;

// switch (country) {
//     case "китай":
//         price = 100;
//         break;
//     case "чили":
//         price = 250;
//         break;
//     case "австралия":
//         price = 170;
//         break;
//     case "индия":
//         price = 80;
//         break;
//     case "ямайка":
//         price = 120;
//         break;
//     default:
//         price < 0;
// }

// if (price > 0) {
//     country = country.charAt(0).toUpperCase() + country.slice(1);
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// } else {
//     alert("В вашей стране доставка не доступна");
// }


// let price;
// let country = prompt('Укажите вашу страну');

// if (country !== null) {
//     country = country.toLowerCase();
// }

// switch (country) {
//     case 'Китай':
//         price = 100;
//         break;
    
//     case 'Чили':
//         price = 250;
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//         break;
    
//     case 'Австралия':
//         price = 170;
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//         break;
    
//     case 'Индия':
//         price = 80;
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//         break;
    
//     case  'Ямайка':
//         price = 120;
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//         break;
    
//     default:
//         price = -1;

//         // console.log('В вашей стране доставка не доступна');
// }
//         // country = country.toUpperCase();
//         // console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
// if (price !== -1) {
//     country = country.charAt(0).toUpperCase() + country.slice(1);
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// } else {
//     alert('В вашей стране доставка не доступна');
//     }
// 6 задача
// бесконечный цикл по вводу чисел, который прерывается Cancel
// do {
//     let input = prompt('введи число');
//     if (input === null) {
//         break;
//     }
// }
//     while (true);
let input;

do {
    input = prompt('введи число');
    input = Number(input);
}
    while (input!==null);