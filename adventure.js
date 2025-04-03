const text = document.getElementById('text');
const options = document.getElementById('options');
const input = document.getElementById('input');
const submit = document.getElementById('submit');

function StoryObject(text, options, scenes, path, secret) {
    this.text = text;
    this.options = options;
    this.scenes = scenes;
    this.path = path;
    this.secret = secret;
}

let inventory = {
    supersize: false
}

const story = new StoryObject(
    'You are taking out the trash at your job from good burger when hatsune miku appears in a doctor strange type portal and kicks master oogway out of her universe. She is real intimidating and master oogway tells you to go after her before she escapes',
    ['Paralyzed with fear', 'Go after her', '"What is going on?!"'],
    [
        new StoryObject(
            'Miku laughs and says smth like "this?! this is your hero? you suck lmao"',
            ['Continue'],
            [new StoryObject(0, [], 0, ['p', 3])]
        ),
        new StoryObject(
            'She kicks you down and says smth like "pathetic"',
            ['Continue'],
            [new StoryObject(0, [], 0, ['p', 3])]
        ),
        new StoryObject(
            'Miku looks at you. "Your mortal brain could not even begin to comprehend the complexity of this situation" she says',
            ['Continue'],
            [new StoryObject(0, [], 0, ['p', 3])]
        ),
        new StoryObject(
            'Miku looks around this world and seems pleased. "This world is nice. It is mine" She walks past master oogway and he lets out a labored scream of grief. He tells you that she will not hesitate to kill to take over this world, and she has army of thousands of soldiers (the soldiers are the rabbids from rabbids invasion). He tells you to follow his advice and train to take Miku on.',
            ['Screw this', 'Train with Oogway'],
            [new StoryObject(
                'You leave and go back to working at good burger. Master shifu portals into the joint and is yelling at you, beggin you to join their cause. He tells the story of his own world and how miku has ravaged their society and has destroyed privacy. He pleads with you to join them again',
                ["Fine, I'll join you", 'No'],
                [
                    new StoryObject(0, [], 0, []),
                    new StoryObject(
                        `Shifu looks flabbergasted. He never even considered that you wouldn't try to save your world. Miku portals in and grabs Shifu. Shifu: "H-How? How did you know I was here?". Miku: "I was hiding in your wifi". Miku chucks Shifu through a portal and looks at you. Miku: "Could I have a good burger meal?"`,
                        ['Supersize'],
                        [new StoryObject(
                            `Miku's face lights up with a childlike wonder. "S... Supersize?" she asks. "Dang right" You clarify. She eats her supersized meal as her heart grows three sizes. "Hey kid. You can get loads of these burgers if you worked here." She demands a job immediatly. You see no threat in her voice, and it seems she has forgotten about the rest of this world completely. You now work with miku at good burger, and have a great time doing it.\nYOU REACHED THE GOOD BURGER ENDING\nOPEN SECRET`,
                            [],
                            []
                        )], 0, {item: 'supersize', option: 'Supersize'}
                    )
                ]
            )]
        ),
        new StoryObject(0, [], 0, [3, 0, 1])
    ]
);

// prints text to screen and handles prompts
StoryObject.prototype.run = function () {
    this.openSecrets();
    
    text.innerHTML = this.text;
    options.innerHTML = '';
    for (option of this.options) {
        options.innerHTML += `<li>${option}</li>`
    }

    let object = this;

    submit.addEventListener('click', function select() {
        if (input.value < object.options.length && input.value >= 0 && input.value) {
            submit.removeEventListener('click', select);

            if (object.scenes[input.value].scenes === 0) {
                object.scenes[input.value].findPath().run();
            } else {
                object.scenes[input.value].run();
            }

            input.value = null;
        }
    })
}

// adds parents to all the objects
StoryObject.prototype.addParents = function () {
    for (scene of this.scenes) {
        if (scene.scenes === 0) {
            scene.parent = this;
        } else {
            scene.parent = this;
            scene.addParents();
        }
    }
}

// useful for going up or down the line multiple times
// returns the object the path leads to
// paths look like ['p'] for parent, or [0] for zero index
// so a path like ['p', 0] will return the parent's first scene
StoryObject.prototype.findPath = function () {
    function followPath(object, path) {
        if (path[0] === 'p') {
            path.shift();
            return followPath(object.parent, path);
        } else if (path.length === 0) {
            return object;
        } else {
            return followPath(object.scenes[path.shift()], path);
        }
    }

    return followPath(this.parent, this.path.slice());
}

StoryObject.prototype.openSecrets = function () {
    if (this.secret) {
        if (inventory[this.secret.item]) {
            this.options.push(this.secret.option);
        }
    }
}

story.addParents();
// story.run();

// Debug Path
story.scenes[4].findPath().run();