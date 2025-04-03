const text = document.getElementById(`text`);
const options = document.getElementById(`options`);
const input = document.getElementById(`input`);
const submit = document.getElementById(`submit`);

function StoryObject(text, options, scenes, path, secret) {
    this.text = text;
    this.options = options;
    this.scenes = scenes;
    this.path = path;
    this.secret = secret;
}

let inventory = {
    supersize: true
}

const story = new StoryObject(
    `The night shift at Good Burger was supposed to be uneventful. The parking lot was empty, the distant hum of traffic the only sound as you hauled a garbage bag toward the dumpster. Then, the air changed.
    A deep hum vibrated through the lot, and with a sudden crack, a portal tore open above the dumpster, swirling with neon blue energy. Inside, two figures clashed—Master Oogway, standing firm, and Hatsune Miku, a streak of turquoise light moving with impossible speed.
    <br><br> “You do not belong here,” Oogway said, deflecting a strike with his staff.
    <br><br> Miku’s teal eyes gleamed. “And you do?”
    <br><br> She unleashed a wave of energy, sharp crescents of sound cutting through the air. Oogway spun his staff, dispersing them, but she was already gone—a blur that reappeared above him. Her foot crashed into his shell, a burst of cyan energy erupting on impact.
    With a resounding crash, Oogway was blasted from the portal, spinning through the air before slamming into the Good Burger dumpster. The lid slammed shut. A lone soda cup rolled onto the pavement.
    You froze, gripping the garbage bag like it was your last defense. The portal still crackled with energy. On the other side, Miku’s gaze shifted from the fallen Oogway… to you.
    <br><br> From inside the dumpster, Oogway’s muffled voice weakly urged, “Go… after her…”
    <br><br> Miku stepped forward, crossing into your world.
    You had no choice.`,
    [`Stay paralyzed, stunned with fear `, `Go after her `, `You exclaim, “What is going on!?” `],
    [
        new StoryObject(
            `You couldn’t move. You couldn’t speak.
            Your body locked up as Miku’s glowing eyes bore into you. The sheer weight of her presence crushed any thought of resistance. Your breath came in short, shallow gasps.
            She sighed, stepping closer, her expression twisting into mocking amusement. “What a hero you are,” she said, her voice dripping with sarcasm. “Truly, a warrior worthy of legend.”
            The air around her pulsed with raw power, yet she made no move to strike. She didn’t need to. You weren’t a threat.
            She turned away, already forgetting you. Somehow, that was worse than anything she could have done.`,
            [`Continue`],
            [new StoryObject(0, [], 0, [`p`, 3])]
        ),
        new StoryObject(
            `You charged.
            Miku barely glanced at you before flicking her hand. A force slammed into your chest, knocking you to the ground.
            She stepped closer, eyes narrowing. “A fast-food worker?” she scoffed. “You reek of fryer grease and wasted potential.”
            You struggled up. Miku tilted her head. “Courage or stupidity?” Glyphs flickered around her fingers. “You think you can stop me?”
            The air pulsed. A sharp force hurled you into split garbage bags.
            Miku loomed over you. “Should I bother finishing this… or have you learned your place?”`,
            [`Continue`],
            [new StoryObject(0, [], 0, [`p`, 3])]
        ),
        new StoryObject(
            `Dragging in a shaky breath, you took a step back, eyes darting between the still-crackling portal and the dumpster where Master Oogway had just crash-landed. Your heart pounded, your brain scrambling to process what you'd just witnessed.
            "What is going on!?" you blurted, voice cracking with panic.
            Miku turned her gaze to you, and for the first time, you felt the full weight of her presence. Her expression remained unreadable, but there was an almost amused glint in her glowing eyes.
            “Your mortal brain could not even begin to comprehend the complexity of this situation,” she said, her voice a perfect blend of synthetic harmony and raw power. “To explain it to you would be like explaining a symphony to a worm.”
            You swallowed hard, taking a shaky step back. The air around her shimmered, distorting like heat waves, her very existence too overwhelming for reality to contain.
            She took a slow step forward. “But I will say this—you're in the wrong place, at the worst possible time.” Her fingers twitched, and a surge of energy crackled in the air between you.`,
            [`Continue`],
            [new StoryObject(0, [], 0, [`p`, 3])]
        ),
        new StoryObject(
            `Miku scanned her surroundings, taking in the neon signs, the flickering streetlights, the distant hum of traffic. A slow, satisfied smile crossed her face.
                “This world is nice,” she murmured. “It is mine.”
                She stepped forward, passing Master Oogway without a glance. Behind her, the old tortoise let out a labored, grief-stricken cry, his voice filled with centuries of wisdom… and sorrow.
                Struggling, he turned to you. “She will not hesitate,” he warned. “She will kill to take this world.” His breath was ragged, his strength barely holding. “And she is not alone.”
                The air shifted. A distant, chaotic chatter echoed through the streets—shrill, high-pitched war cries growing louder. On the horizon, countless small, white figures emerged, their beady eyes glowing in the dim light. The Rabbids had arrived.
                Oogway grabbed your arm, his grip weak but urgent. “You cannot face her as you are,” he said. “If you wish to stop her… you must train.”`,
            [`Screw this`, `Train with Oogway`],
            [new StoryObject(
                `You shake your head and walk back inside Good Burger. Flipping patties is way safer than fighting an anime pop goddess. Just as you settle back in, a portal bursts open inside the restaurant. Master Shifu stumbles out, eyes wild. “WHAT ARE YOU DOING?!” He launches into a desperate rant about Miku’s reign of terror—how she’s ravaged his world, abolished privacy, and turned society into a dystopian nightmare. “Please,” he begs, gripping your uniform. “We need you.” He stares at you, waiting for an answer. `,
                ["Fine, I`ll join you", `No`],
                [
                    new StoryObject(0, [], 0, []),
                    new StoryObject(
                        `Shifu looks flabbergasted. He never even considered that you wouldn't try to save your world. Miku portals in and grabs Shifu. Shifu: "H-How? How did you know I was here?". Miku: "I was hiding in your wifi". Miku chucks Shifu through a portal and looks at you. Miku: "Could I have a good burger meal?"`,
                        [],
                        [new StoryObject(
                            `Miku's face lights up with a childlike wonder. "S... Supersize?" she asks. "Dang right" You clarify. She eats her supersized meal as her heart grows three sizes. "Hey kid. You can get loads of these burgers if you worked here." She demands a job immediatly. You see no threat in her voice, and it seems she has forgotten about the rest of this world completely. You now work with miku at good burger, and have a great time doing it. <br><br>YOU REACHED THE GOOD BURGER ENDING <br><br>OPEN SECRET`,
                            [],
                            []
                        )], 0, { item: `supersize`, option: `Supersize`}
                    )
                ]
            )]
        ),
        // the debug path
        new StoryObject(0, [], 0, [3, 0, 1])
    ]
);

// prints text to screen and handles prompts
StoryObject.prototype.run = function () {
    this.openSecrets();

    text.innerHTML = this.text;
    options.innerHTML = ``;
    for (option of this.options) {
        options.innerHTML += `<li>${option}</li>`
    }

    let object = this;

    submit.addEventListener(`click`, function select() {
        if (input.value < object.options.length && input.value >= 0 && input.value) {
            submit.removeEventListener(`click`, select);

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
// paths look like [`p`] for parent, or [0] for zero index
// so a path like [`p`, 0] will return the parent`s first scene
StoryObject.prototype.findPath = function () {
    function followPath(object, path) {
        if (path[0] === `p`) {
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
story.run();

// Debug Path
// story.scenes[4].findPath().run();