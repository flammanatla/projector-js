'use strict'
/*
2. Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом
    
    Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
    В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
    
    Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
    Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
    
    Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
    Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
    
    Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.
*/

const body = document.querySelector('body');
const button = document.querySelector('.btn');
const message = document.querySelector('h1');

console.log(button, message);

const constants = {
    dark: '#2C2A2E',
    light: '#FFFFFF',
    onLabel: 'Turn on',
    offLabel: 'Turn off',
}

// load buttons state from local storage
button.innerHTML = localStorage.getItem('buttonState');

// identify all page parameters based on button label
if (button.innerHTML === constants.offLabel) {
    switchOff(); // if button label was Turn off => button should be black, white background
} else {
    switchOn(); // if button label was Turn on => button should be white, black background

}
// load the last message
message.innerHTML = localStorage.getItem('message');

function switchOn() {
    const dateString = new Date().toLocaleString();

    button.innerHTML = constants.onLabel;
    message.innerHTML = 'Last turn off:';

    message.style.color = constants.light;
    button.style.backgroundColor = constants.light;
    button.style.color = constants.dark
    body.style.backgroundColor = constants.dark;

    message.innerHTML = 'Last turn off: ' + dateString;
}

function switchOff() {
    const dateString = new Date().toLocaleString();

    button.innerHTML = constants.offLabel;

    message.style.color = constants.dark;
    button.style.backgroundColor = constants.dark;
    button.style.color = constants.light;
    body.style.backgroundColor = constants.light;

    message.innerHTML = 'Last turn on: ' + dateString;
}

button.addEventListener('click', function (event) {

    if (button.innerHTML === constants.offLabel) {
        switchOn();
    } else {
        switchOff();
    }

    localStorage.setItem('buttonState', button.innerHTML);
    localStorage.setItem('message', message.innerHTML);
});