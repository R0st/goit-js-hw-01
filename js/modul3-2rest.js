'use strict';

//Операция rest(сбор)
const profile = {
    name: 'Jakes Gluke',
    tag: 'jgluke',
    locationOther: 'Ocho Ricco, Jamaica',
    avatar: 'https://s3.amazonaws.com/128jpg',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

//если из обьекта нужно выкинуть определнное количество свойств в локальные переменные,
// а остальные собрать в другой произвольный обьект чтобы использовать в др месте
// const { name, tag, locationOther } = profile;    //вытянули только 3 этих свойства

// const restProps = {     //все оставшееся после дестр забираем в локал переменную
//     avatar: profile.avatar,
//     stats: profile.stats,
// };

//либо записать так 
console.log('локальная переменная с rest\'OM ')
const { name, tag, locationOther, ...restProps } = profile;    //вытянули только 3 этих свойства

console.log(name, tag, locationOther);
console.log(restProps);

