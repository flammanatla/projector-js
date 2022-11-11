'use strict'
///////////// **Задача про обчислення різниці часу**

// Напишіть функцію яка буде буде приймати 3 параметри

// - початкову дату (string)
// - кінцеву дату (string)
// - розмірність ('days', 'hours', 'minutes', seconds)

// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
// Приклади:

// durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')  // поверне '86400 seconds'
// durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  // поверне '362 days'
console.log('<---------------- Task #1 ---------------->');

const date1 = '02 Aug 1985';
const date2 = '03 Aug 1985';
const date3 = '31 Jan 2022';
const date4 = '03 Feb 2021';

//default parameters count how many days past since the beginning of PRJCTR JS course :)
const durationBetweenDates = function (startDate = '21 Oct 2022', endDate = new Date(), unit = 'days') {
    let diff = Math.abs(Date.parse(startDate) - Date.parse(endDate));
    switch (unit) {
        case 'seconds':
            return `${diff / 1000} ${unit}`;
        case 'minutes':
            return `${diff / 1000 / 60} ${unit}`;
        case 'hours':
            return `${diff / 1000 / 60 / 60} ${unit}`;
        case 'days':
            return `${Math.round(diff / 1000 / 60 / 60 / 24)} ${unit}`; //round because we need to take into account daylight saving time, 30 Nov 2022 is 1h less
        default:
            return `Unknown unit`;
    }
}

console.log(durationBetweenDates(date1, date2, 'minutes'));
console.log(durationBetweenDates(date3, date4, 'days'));
console.log(durationBetweenDates());

///////////////////Some extra experiments :)
const dateArrays = [['02 Aug 1985', '03 Aug 1985', 'minutes'], ['31 Jan 2022', '03 Feb 2021', 'days']];

for (let i = 0; i < dateArrays.length; i++) {
    console.log(`Duration between ${dateArrays[i][0]} and ${dateArrays[i][1]} is:
     ${durationBetweenDates(dateArrays[i][0], dateArrays[i][1], dateArrays[i][2])}`);
}


/////////////// **Задача про перетворення об'єкту**

// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
console.log('<---------------- Task #2 ---------------->');

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngEs: '48.7584',
};

function optimizer(data) {
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key.toLowerCase(), Number(value).toFixed(2)])
    )
};

const updatedPriceData = optimizer(priceData);

console.log(updatedPriceData);



/////////////// **Задача про рекурсію та ітерацію**

// Напишіть:

// 1. Функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
console.log('<---------------- Task #3 ---------------->');

function recursiveOddSumTo(number) {
    if (number === 1) {
        return 1;
    }
    return (number % 2 === 0) ? recursiveOddSumTo(number - 1) : number + recursiveOddSumTo(number - 2);
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(10));
console.log(recursiveOddSumTo(20));

// 2. Функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
console.log('<---------------- Task #4 ---------------->');

function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i = i + 2) {
        sum += i;
    }
    return sum;
};

console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(10));
console.log(iterativeOddSumTo(20));