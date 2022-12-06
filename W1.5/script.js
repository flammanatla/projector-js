'use strict'

/*
1. Задача на селектори:
Для сторінки з вебінару ([https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html](https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html)) напишіть селектори для наступних елементів:
    - для елементу з текстом 'Навігація по DOM дереву'
    - для першого елементу <section>
    - для елементу списку з текстом 'Пункт 5'
    - для елементу з класом 'hatredLevelBlock'
    
    Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.
*/
const header = document.getElementById('headerTwo');
const firstSection = document.querySelectorAll('section')[0];
const item_5 = document.querySelector('ul :nth-child(5)');
const hatredLevel = document.getElementsByClassName('hatredLevelBlock')[0];

console.log(header, firstSection, item_5, hatredLevel);