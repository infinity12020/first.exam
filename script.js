// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number

let arr = [
    {
        name: 'Milk',
        price: 3.25
    },
    {
        name: 'Coffee',
        price: 1.5
    },
    {
        name: 'Ice Cream',
        price: 7.85
    },
    {
        name: 'Tomatos',
        price: 4.14
    },
    {
        name: 'Onion',
        price: 2.25
    }
]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*
// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
//1
    max = arr.reduce((a, b) => a.price > b.price ? a : b)

//2
    min = arr.reduce((a, b) => a.price < b.price ? a : b)

//3
    total = arr.reduce((a, b) => b.price + a, 0)

//4
    totalSale = total / 100 * 10
//5
    arr_sale = arr.map(item => {
        item.price = item.price - item.price / 100 * 10
        return item
    })

//6
    average = total / arr.length


//console
    console.log(max);
    console.log(min);
    console.log(total);
    console.log(totalSale);
    console.log(arr_sale);
    console.log(average);
}

setup()
