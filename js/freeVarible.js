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
// let message;

// switch (message) {
//     case 'Китай':
//         price = 100;
//         break;

//     case 'Чили':
//         price = 250;
//         break;
    
//     case 'Австралия':
//         price = 170;
//         break;
    
//     case 'Индия':
//         price = 80;
//         break;
    
//     case 'Ямайка':
//         price = 120;
//         break;
    
//     default:
//         console.log('В вашей стране доставка не доступна');
// }
// console.log(`Доставка в ${country.length} будет стоить ${price} кредитов`);


let price;
// let country;
const country = prompt('Укажите вашу страну');
// let normalizedCountry = country.toUpperCase();


switch (country) {
    case 'Китай':
        let normalizedCountry = country.toUpperCase();
        price = 100;
        console.log(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов`);
        break;

    case 'Чили':
        price = 250;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
    case 'Австралия':
        price = 170;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
    case 'Индия':
        price = 80;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
    case  'Ямайка':
        price = 120;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
    default:
        console.log('В вашей стране доставка не доступна');
}

// 6 задача
