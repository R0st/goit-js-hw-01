'use strict'

// const playlist = {  //литерал обьекта {}
//     name: [1, 2, 3],  //в ключ может написать любое значение-буль, строку, функцию, массив
//     b: 5,
//     c: 10
// };
// console.log(playlist);

const playlist = {  //литерал обьекта {}
    name: 'My super playlist',  //в ключ может написать любое значение-буль, строку, функцию, массив
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
};
playlist.qwe = 55; //ручное добавление свойств
console.log(playlist);
console.log(playlist.rating); //достучаться к значению свойства (имя_обьекта.имя_свойства)

const propertyName = 'tracks';
console.log(playlist[propertyName]); //создали переменную и ищем ее (13строка)
console.log(playlist.propertyName); //выдаст undefined потому что нет такого свойтсва в плейлисте

//короткая запись свойств - shortHand
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    username, //если имя ключа совпадает с именем переменной то можно оставить 1 значение
    email: email
}
console.log(signupData);

//вычисляемые свойства
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue, //им переменной станет ключем, пишем в квадратных скобках
}
console.log(colorPickerData);

//ссылочный тип
const a = { x: 1, y: 2 };
const b = a;
console.log(b === a);   //будет true, так как ссылка одна и та же на один обьект

console.log({ a: 1 } === { a: 1 }); //будет false так как разные ячейки хотя свойства одинаковые

//массивы и функции это обьекты
const fn = function () {
    console.log('hello');
};
fn.hello = ';)';
console.dir(fn.hello);


//методы
const playlistOne = {  //литерал обьекта {}
    name: 'My super playlist',  //в ключ может написать любое значение-буль, строку, функцию, массив
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    //trackCount: 3,
    //старая запись
    // getName: function () {  //это метод обьекта
    //     console.log('Ага это getName'); //существует чтобы работать со свойствами обьекта
    // }   // то есть метод это функция, которая работает со свойствами обьекта
    
    //новая запись
    getName() {  //это метод обьекта
        console.log('Ага это getName'); //существует чтобы работать со свойствами обьекта
    },   // то есть метод это функция, которая работает со свойствами обьекта

    changeName(newName) {
        console.log('this внутри changeName: ', this);
        this.name = newName;
    },
    addTrack(track) {  //добавляем новый трек в tracks
        this.tracks.push(track);
        //this.trackCount = this.tracks.length;
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    }
};

console.log(playlistOne.getTrackCount());
playlistOne.changeName('Новое имя');
playlistOne.getName();  //вызов фунции
playlistOne.addTrack('новый трек');
console.log(playlistOne.getTrackCount());
playlistOne.updateRating(4);
console.log(playlistOne);