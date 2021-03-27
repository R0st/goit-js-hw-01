'use strict'

//перебор через for...in и Object.keys|values|entries

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

let totalFeedBack = 0;

// const keys = Object.keys(feedback); //получить массив ключей из обьекта feedback
// console.log(keys);

// for (const key of keys) {   //перебирем масив через for...of
//     console.log(key);
//     console.log(feedback[key]);     //получаем значение ключа внутри цикла
//     totalFeedBack += feedback[key];   //общее количество feedback`ов
// }
// console.log('totalFeedBack: ', totalFeedBack);

const values = Object.values(feedback);     //массив значений
console.log(values);

for (const value of values) {
    totalFeedBack += value;
}
console.log('totalFeedBack: ', totalFeedBack);


//работа с коллекцией (массивом обьектов)
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];
console.table(friends);

for (const friend of friends) { //в сложный тип передается не копия а ссылка на оригинальный обьект
    console.log(friend);    // и передается в каждую итерацию
    console.log(friend.online);    // и передается в каждую итерацию
    friend.newprop = 555;   //сложный тип передачи по ссылке
}
console.table(friends);

//ищем друга по имени
const findFriendByName = function (allFriends, friendName) {
    //allFriends-параметр, куда записывается ссылка на этот массив
    //name-параметр, в котором будет лежать имя друга
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.name);

        if (friend.name === friendName) {
                return 'Нашли!!!'
            }
    }
    return 'Не нашли(';
};
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));
console.log('!!!с л е д у ю щ а я  за да ча!!!');

//нужно получить все имена друзей
const getAllNames = function (allFriends) {
    //создаем новый массив, закидываем наши полученные имена и возвращаем
    const names = [];

    for (const friend of allFriends) {
        console.log(friend.name);
        names.push(friend.name);
    }
    console.log(names); 
};
console.log(getAllNames(friends));
console.log(' N E X T');

//получаем имена друзей, которые онлайн
const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (friend.online) {
            onlineFriends.push(friend);
        }
    }
    return onlineFriends;
};
    console.log(getOnlineFriends(friends));     //будем вызывать нашу функцию и кидать ссылку на массив обьектов
console.log('последняя задача');

//создать 2 массива онлайн и офлайн
//если тру - в первый, фолс-во второй
const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        onlineNow: [],
        offlineNow: [],
    };
    for (const friend of allFriends) {
        if (friend.online) {
            friendsByStatus.onlineNow.push(friend);
            continue;
        }
            friendsByStatus.offlineNow.push(friend);
    }
    return friendsByStatus;
};
console.log(getFriendsByOnlineStatus(friends));
 