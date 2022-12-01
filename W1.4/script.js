'use strict'

/*
1. Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від 
їх кількості (але без використання вбутованого об'єкту Math).
Використайте оператор розширення:
*/
console.log(`<------------1-------------->`);

console.log(addThemAll(2, 4));          // 6
console.log(addThemAll(1, 2, 3, 4));    // 10
console.log(addThemAll(5, 5, 10));      // 20

function addThemAll(...args) {
    return args.reduce((prev, curr) => prev + curr, 0);
}

/*
2. Задача на використання замикання. Напишіть функцію яка працює таким чином: `multiply(a)(b)` // a * b
*/
console.log(`<------------2-------------->`);

console.log(multiply(5)(5))  // 25
console.log(multiply(2)(-2)) // -4
console.log(multiply(4)(3))  // 12

function multiply(a) {
    return function (b) {
        return a * b;
    }
}

/*
3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати
 два аргумента:
    - властивість за якою треба посортувати
    - опцію напрямку сортування, зростання чи спадання
*/
console.log(`<------------3-------------->`);

const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

//console.log(makeCopy(movies));
console.log('movieName', 'asc:', makeCopy(movies.sort(byProperty('movieName', 'asc'))));
console.log('movieName', 'desc:', makeCopy(movies.sort(byProperty('movieName', 'desc'))));

console.log('releaseYear', 'asc:', makeCopy(movies.sort(byProperty('releaseYear', 'asc'))));
console.log('releaseYear', 'desc:', makeCopy(movies.sort(byProperty('releaseYear', 'desc'))));

console.log('directedBy', 'asc:', makeCopy(movies.sort(byProperty('directedBy', 'asc'))));
console.log('directedBy', 'desc:', makeCopy(movies.sort(byProperty('directedBy', 'desc'))));

console.log('runningTimeInMinutes', 'asc:', makeCopy(movies.sort(byProperty('runningTimeInMinutes', 'acs'))));
console.log('runningTimeInMinutes', 'desc:', makeCopy(movies.sort(byProperty('runningTimeInMinutes', 'desc'))));

function makeCopy(value) {
    return JSON.stringify(value, null, 2);
}

function byProperty(property, direction) {
    let x;
    //console.log(direction, x);
    if (direction === 'asc') {
        x = 1;
        //console.log(direction, x);
    }
    else if (direction === 'desc') {
        x = -1;
        //console.log(direction, x);
    }

    return (a, b) => {
        if (a[property] > b[property]) {
            //console.log(a, b, direction, x);
            return x;
        } else if (a[property] === b[property]) {
            return 0;
        } else if (a[property] < b[property]) {
            //console.log(a, b, direction, -x);
            return -x;
        }
    };
};

/*
4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, 
починаючи з delay(ціле число) і в кінці замість 0 виведе 'BOOM!'.Напишіть її двома варіантами:
- Використовуючи setInterval
- Використовуючи вкладений setTimeout
*/
console.log(`<------------4-------------->`);

detonatorTimerViaInterval(5);

function detonatorTimerViaInterval(delay) {
    let currentDelay = delay;
    const timer = setInterval(() => {
        if (currentDelay > 0) {
            console.log(`Timer delay via interval is ${currentDelay}`);
        }
        currentDelay--;

        if (currentDelay === -1) {
            clearTimeout(timer);
            console.log(`BOOOOOM (by interval)`);
        };

    }, 1000);
};

detonatorTimerViaTimeout(5);

function detonatorTimerViaTimeout(delay) {
    let currentDelay = delay;

    const countdown = () => {
        if (currentDelay > 0) {
            console.log(`Timer delay via timeout is ${currentDelay}`);
        }
        currentDelay--;

        if (currentDelay === -1) {
            console.log(`BOOOOOM (by timeout)`);
        };
        setTimeout(countdown, 1000);
    };

    setTimeout(countdown, 1000);
    //console.log(timer);
}

detonatorTimerViaTimeout2(5);

function detonatorTimerViaTimeout2(delay) {
    let currentDelay = delay;

    const timer = (countdown) =>
        setTimeout(() => {
            console.log(`Timer delay via timeout2 is ${countdown}`);
        }, (delay + 1 - countdown) * 1000);

    while (currentDelay > 0) {
        timer(currentDelay);
        currentDelay--;
    }

    setTimeout(() =>
        console.log(`BOOOOOM (by timeout2)`), (delay + 1) * 1000);
};

/*
5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) 
що ці властивості виводять. Наприклад:
*/
console.log(`<------------5-------------->`);

let mentor = {
    name: 'Mykola',
    residency: 'Lviv',
    gender: 'male',
    age: 31,
    hobby: 'crafting',
    defaultMood: 'focused',
    currentMood: 'sleepy',
    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
        console.log(`I hope that next year I'm gonna be ${this.age + 1}`);
    },
    describeMyMood() {
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
}

mentor.introduce();
mentor.prognose();
mentor.describeMyMood();

let student = {
    name: 'Natalka',
    residency: 'London',
    gender: 'unicorn',
    birthYear: 1990,
    pets: ['Kesha', 'Dzhoozia'],
    lovesDriving: true,
    currentlyLearning: 'JavaScript',
    calcAge() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    introduce() {
        //this.calcAge(this.birthYear);
        console.log(`My name is ${this.name}, I am ${this.calcAge()} years old and I live in ${this.residency}`);
    },
    prognose() {
        console.log(`I'm gonna master my ${this.currentlyLearning} skills`);
    },
    describeMyPersonality() {
        console.log(`I have ${this.pets.length} pets and I ${this.lovesDriving ? '' : 'do not'}love driving`);
    }
}

student.introduce();
student.prognose();
student.describeMyPersonality();

/*
6. А тепер зробіть всі свої методи з задачі `5` прив'язаними до контексту свого об'єкту -
аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
*/
console.log(`<------------6-------------->`);

let securedSelfIntroduce = student.introduce.bind(student);
let securedSelfPrognose = student.prognose.bind(student);
let securedSelfDescribeMyPersonality = student.describeMyPersonality.bind(student);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат*
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат*
setTimeout(securedSelfDescribeMyPersonality, 3000); // виведе коректний результат*

/*
7. Напишіть функцію - декоратор яка вповільнює виконання довільної функції на вказану кількість
 секунд.
*/

console.log(`<------------7-------------->`);

function someFunction(a, b) {
    return a + b;
}; // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {

    function wrapper(...args) {
        console.log(`a and b are:`, ...args);
        console.log(`Chill out, you will get you result in ${seconds} seconds`);
        setTimeout(() =>
            console.log(`a + b:`, func.apply(this, args)), seconds * 1000
        );
    };

    return wrapper;
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

slowedSomeFunction(4, 5); // викликаєте декоратор*
// виведе в консоль "Chill out, you will get you result in 5 seconds"

//...через 5 секунд виведе результат роботи 'someFunction'