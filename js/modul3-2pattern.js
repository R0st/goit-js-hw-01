'use strict';

//Паттерн "Обьект настроек" - применяется когда у функции >=3 аргументов 
//---дестр параметра обьекта в подписи функции
// const showProfileInfo = function (userProfile) {
//     const {     //внутри функции передаете обьект, дестр и использует эти свойства внути себя
//         name,
//         tag,
//         locationOther,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;

    //можно записать еще так дестр, и сразу подставить значения вместо userProfile
    // const showProfileInfo = function ({     //внутри функции передаете обьект, дестр и использует эти свойства внути себя
    //     name,
    //     tag,
    //     locationOther,
    //     avatar,
    //     stats: { followers, views, likes },
    // }) {
    // console.log(name,tag,locationOther,avatar,followers,likes,views);
// }
//---rest при дестр в подписи
console.log('rest при дестр в подписи');
const showProfileInfo = function (userProfile) {
    const {     //внутри функции передаете обьект, дестр и использует эти свойства внути себя
        name,
        tag,
        locationOther,
        ...restProps
    } = userProfile;
    console.log(restProps);
}
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

    showProfileInfo(profile);