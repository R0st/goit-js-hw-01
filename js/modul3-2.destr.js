'use strict';

//Деструктуризация обьекта (очистка кода)
//-значение по умолчанию
//-имя переменной отличное от имени свойства

const playlist = {
    name: 'My super playlist',  //в ключ может написать любое значение-буль, строку, функцию, массив
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
};
const { rating, name: newName, tracks } = playlist;   //деструктуризация или распаковка
//в локальную переменную newName положи значение свойства name из обьекта playlist
//справа стоит обьект(playlist)
//а локальную переменную нужно сделать по имени свойства (rating)
console.log(
    rating,
    name,
    tracks,
);

const { author=777 } = playlist;    // если значения нет, то его нужно присвоить дефолтно
console.log(author);    //если есть в обьекте playlist, то записвается то что есть а дефолтное игнорируется
//  const playlist={
//  author: 88;   будет применено это значение
//  }
//Обьект читает,но туда ничего не записывает!!!!!!!!
console.log('деструктуризация обьекта в обьекте!!!!!');
//Глубокая деструктуризация
const profile = {
    nameOther: 'Jakes Gluke',
    tag: 'jgluke',
    locationOther: 'Ocho Ricco, Jamaica',
    avatar: 'https://s3.amazonaws.com/128jpg',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};
//1 метод - примитивный
// const { nameOther, tag, locationOther, avatar, stats } = profile;  //в stats неудобно будет достучаться
//до его свойств и нужно будет прописываьб stats.views, а мы с помощью деструктуризации 
//избавились от этого лишнего кода
// const { followers, views, likes } = stats; //создадим еще одну константу для массива
//но можно сделать глубокую деструктуризацию и применить так
const {     //2 метод-нормальный
    nameOther,
    tag,
    locationOther,
    avatar,
    stats: {followers, views, likes}, //это строка в которой добавлена глубокая дестр
} = profile;
//
console.log(nameOther,tag,locationOther,avatar,followers,views,likes,);

//Дестр массивов
const rgb = [255, 100, 80];
const [a, b, c] = rgb;  //можно пропустить свойство b - [a, , c]
console.log(a, b, c);

//найти автора с самым высоким рейтингом
console.log('след задача. найти автора с наивысшим рейтингом')
const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

const ratings = Object.values(authors);
console.log(Math.max(...ratings));  //но здесь не будет имени

//если через ключи то
const keys = Object.keys(authors);
for (const key of keys) {
    console.log(key);
    console.log(authors[key]);
}
//делаем через entries
const entries = Object.entries(authors);
// console.log(entries);   //возвращает массив массивов

// for (const entry of entries) {  //или меняем эту строку на  1-1
for (const [firstItem, secondItem] of entries) {  //финальная строка 1-11
    
    // console.log(entry);     //это будет массив и потом берем в нем первые два элемента
    // const firstItem = entry[0];  //2-1
    // const secondItem = entry[1]; //2-1
    // const [firstItem, secondItem] = entry;  //2-2дестр массива, ===двум верхним записям
    console.log(firstItem, secondItem);
}
