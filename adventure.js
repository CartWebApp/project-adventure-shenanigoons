const text = document.getElementById('text');
const options = document.getElementById('options');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

function StoryObject(text, options, scenes, path) {
    this.text = text;
    this.options = options;
    this.scenes = scenes;
    this.path = path;
}

const test = new StoryObject(
    'You are taking out the trash at your job from good burger when hatsune miku appears in a doctor strange type portal and kicks master oogway out of her universe. She is real intimidating and master oogway tells you to go after her before she escapes',
    ['Paralyzed with fear', 'Go after her', '"What is going on?!"'],
    [
        new StoryObject(
            'Miku laughs and says smth like "this?! this is your hero? you suck lmao"',
            ['Continue'],
            [new StoryObject(0, 0, 0, ['p'])]
        )
    ]
);



// const test = {
//     text: 'You are taking out the trash at your job from good burger when hatsune miku appears in a doctor strange type portal and kicks master oogway out of her universe. She is real intimidating and master oogway tells you to go after her before she escapes',
//     options: ['Paralyzed with fear', 'Go after her', '"What is going on?!"'],
//     scenes: [
//         {
//             text: 'Miku laughs and says smth like "this?! this is your hero? you suck lmao"',
//             options: ['Continue'],
//             scenes: [[]]
//         }
//     ],
//     init: function () {
//         for (i in this.scenes) {
//             this.scenes[i].parent = this;
//         }
//         delete this.init;
//         return this;
//     }
// }.init();

StoryObject.prototype.run = function () {
    text.innerHTML = this.text;
    options.innerHTML = '';
    for (option of this.options) {
        options.innerHTML += `<li>${option}</li>`
    }
}

StoryObject.prototype.addParents = function () {
    for (scene of this.scenes) {
        if (typeof scene === 'string') {
            console.log('grumbus');
        } else {
            scene.parent = this;
        }
    }
}

// get a mapping function for the path
StoryObject.prototype.findPath = function () {
    function followPath(object, path) {
        if (path[0] === 'p') {
            path.shift();
            followPath(object.parent, path);
        } else if (path.length === 0) {
            return object;
        } else {
            path.shift();
            followPath(object.scenes[path[0]], path);
        }
    }

    console.log(followPath(this.parent, this.path));
    console.log(this.path);
    console.log(this);
}

test.addParents();
test.scenes[0].addParents();
test.scenes[0].scenes[0].findPath();
// test.scenes[0].parent.run();