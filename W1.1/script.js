//////////////////Task1
////Find initials and put them in the array in alphabetic order
const userFullNames = ["Петрик Ольга Іванівна",
    "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;
let initialsArray;

initialsArray = userFullNames.map(
    (userFullName) => userFullName.split(' ').map( // Create array where each element is a partial name
        (userPartialName) => userPartialName[0] // Select only 1st letter of each partial name
    )
);

initials = initialsArray.map(
    (initial) => initial.join('.') + '.' //convert array into string with initials
)

initials.sort((a, b) => {
    if (a[0] > b[0]) {
        return 1;
    } else if (a[0] === b[0]) {
        return 0;
    } else if (a[0] < b[0]) {
        return -1;
    }
});

console.log(initials); // [ "Г.П.А", "П.О.І", "Р.А.О"]


/////////////////Task2
////Reverse the number
const currentMaxValue = 4589;
let reversedMaxValue;
let reversedArray;

/* 
let acc = currentMaxValue;
let numberArray = [];

while (acc >= 10) {
    numberArray.push(acc % 10);  //Add the last digit of the number into array
    acc = Math.floor(acc / 10);  //Calculate the remaining part of the number
}
numberArray.push(acc);           // do not forget about the last piece of the number

reversedMaxValue = Number(numberArray.join(''));
*/

reversedArray = String(currentMaxValue).split('').reverse();

reversedMaxValue = Number(reversedArray.join(''));

console.log(reversedMaxValue); // 9854
console.log(typeof reversedMaxValue); // 'number'




/////////////////Task3
///////Find the product of all numbers in the array
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

let flatArray = resultsArray.flat(Infinity);
console.log(flatArray);

// let i = 0;
// productOfArray = 1;
// while (i <= resultsArray.length) {
//     productOfArray *= flatArray[i];
//     i++;
// }

productOfArray = flatArray.reduce(
    (product, currentValue) => product * currentValue,
    1
);

console.log(`productOfArray ---> ${productOfArray}`); // 24