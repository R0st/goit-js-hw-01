'use strict';
//работаем с коллекцией товаров в корзине
const cart = {
    items: [],
    getItems() {           
        return this.items;
    },     //метод должен возвращать ссылку на массив items[]
    add(product) {      //добавляем обьект продукта в items[]

        console.table(this.items);
        for (const item of this.items) {
            console.log(item);

            if (item.name === product.name) {
                item.quantity += 1;
                return;
                console.log('такой продукт уже есть', product.name)
            }
        }
        const newProduct = {
            ...product,    //добавляем новое свойство если продукт повторяется(что-о типа дублирования)
            quantity: 1,
        };
        this.items.push(newProduct);
        // this.items.push(product); первая запись без нового обьекта
        //теперь проверяем если есть такой продукт то изменяем его количество
    },
    remove(productName) {   //удаление продукта из массива
        // for (const item of this.items) {    //перебираем наш массив поэлементно
        //     console.log(item);
        //     if (productName === item.name) {
        //         console.log('нашли такой продукт', productName)
        //     }
        // }
            //for...of нам не подходит, так как мы можем перебрать массив но удалить никак
    //заменяем его на for
        const { items } = this;     //кладется указатель на этот массив
    for (let i = 0;i<items.length; i+=1) {
        // console.log(this.items[i]);
        // const item = this.items[i];
        //можно применить дестр
        const {name}=items[i];
        if (productName === name) {
        // if (productName === item.name) {
            console.log('нашли такой продукт', productName);
            console.log('индекс', i);
            items.splice(i,1);
            }   
        }
        },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        console.log(this.items);
        let total = 0;
        // for (const item of this.items) {
        //     total += item.price;
        // дестр - 
            const { items } = this;
            for (const { price,quantity } of items) {
            total += price*quantity;
            // console.log(item);
            
        }
        return (total);
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) {},
}

console.log(cart.getItems());

cart.add({ name: 'яблоко', price: 50 });
cart.add({ name: 'яблоко', price: 50 });
cart.add({ name: 'лимон', price: 60 });
cart.add({ name: 'дыня', price: 60 });
cart.add({ name: 'клубника', price: 110 });
cart.add({ name: 'клубника', price: 110 });


console.table(cart.getItems());

cart.remove('лимон');
console.table(cart.getItems());

console.log('Total', cart.countTotalPrice());

cart.clear();
console.log(cart.getItems());
