const text = document.getElementById('text');
const options = document.getElementById('options');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

const test = {
    text: 'You are taking out the trash at your job from good burger when hatsune miku appears in a doctor strange type portal and kicks master oogway out of her universe. She is real intimidating and master oogway tells you to go after her before she escapes',
    options: ['Paralyzed with fear', 'Go after her', '"What is going on?!"'],
    scenes: [
        {
            text: 'Miku laughs and says smth like "this?! this is your hero? you suck lmao"',
            options: ['Continue'],
            scenes: [[]]
        }
    ],
    init: function () {
        for (i in this.scenes) {
            this.scenes[i].parent = this;
        }
        delete this.init;
        return this;
    }
}.init();

Object.prototype.run = function () {
    text.innerHTML = this.text;
    options.innerHTML = '';
    for (option of this.options) {
        options.innerHTML += `<li>${option}</li>`
    }
}

if (typeof thing === 'array') {
    let current = test;
    for (index of thing) {
        current = current.scenes[index];
    }
    return current;
}

test.scenes[0].scenes[0].run();