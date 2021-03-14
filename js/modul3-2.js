'use strict';

//операция spread-распыление
//array.prototype.concat и аналог через spread;
// const number = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(number);

const number = [10,2,22,...[1,2,3],44,55];    //распыление массива [1,2,3] в новом масиве
console.log(number);

//поиск самой маленькой или самой большой темпратуры(числа)
const temps = [18, 14, 12, 21, 17, 29, 24];
console.log(Math.max(...temps));    //распаковка отдельными независимыми значениями

// const a = [1, 2, 3];     //это примитивы и данные просто копируются
// const b = [...a];       
// console.log(a === b);   //массив b не равен а, так как это просто копия
                        //равны только элементы массива
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];   //это сложные типы,не копируется а ставится ссылочка
const b = [...a];
console.log('a:', a);
console.log('b:', b);
console.log(a[0] === b[0]);

console.log('НОВАЯ ЗАДАЧА');

//сливаем несколько массивов в один через concat() и spread
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);

//распыление обьектов
const aa = { x: 1, y: 2 };
const bb = { x: 0, z: 3 };
// const c = Object.assign({}, aa, bb);    //тоже самое что и строка ниже
const c = { ...aa,x:55, ...bb,z:66,y:77 };
console.log(c);


