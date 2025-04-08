const text = document.getElementById(`text`);
const options = document.getElementById(`options`);
const input = document.getElementById(`input`);
const submit = document.getElementById(`submit`);
const image = document.getElementById(`image`);

// I'm templating it I'm templating it I'm templating it I'm templating it I'm templating it I'm templating it 

/* 
    {
        text: `story text to be displayed`,
        options: [`choice 1`, `choice 2`],
        scenes: [
            {
                this is the scene selected by choice 1
            },
            {
                this is the scene selected by choice 2
            }
        ],
        image: `the image file to be displayed`,
        // secret appends an option to the options array if the item in the inventory is true
        // so supersize shows as an option if supersize is true
        secret: {item: supersize, option: `Supersize`},
        item: `string of the item to be added to the inventory`,
        ending: true or false
        
        // if want scene to go up to parent and down path { path: ['p', (num of option), ...] }

        // mabye add fonts perchance
    }
*/

const inventory = {
    
};

const story = {
    text: `The night shift at Good Burger was supposed to be uneventful. The parking lot was empty, the distant hum of traffic the only sound as you hauled a garbage bag toward the dumpster. Then, the air changed.
    A deep hum vibrated through the lot, and with a sudden crack, a portal tore open above the dumpster, swirling with neon blue energy. Inside, two figures clashed—Master Oogway, standing firm, and Hatsune Miku, a streak of turquoise light moving with impossible speed.
    <br><br> “You do not belong here,” Oogway said, deflecting a strike with his staff.
    <br><br> Miku’s teal eyes gleamed. “And you do?”
    <br><br> She unleashed a wave of energy, sharp crescents of sound cutting through the air. Oogway spun his staff, dispersing them, but she was already gone—a blur that reappeared above him. Her foot crashed into his shell, a burst of cyan energy erupting on impact.
    With a resounding crash, Oogway was blasted from the portal, spinning through the air before slamming into the Good Burger dumpster. The lid slammed shut. A lone soda cup rolled onto the pavement.
    You froze, gripping the garbage bag like it was your last defense. The portal still crackled with energy. On the other side, Miku’s gaze shifted from the fallen Oogway… to you.
    <br><br> From inside the dumpster, Oogway’s muffled voice weakly urged, “Go… after her…”
    <br><br> Miku stepped forward, crossing into your world.
    You had no choice.`,
    options: [`Stay paralyzed, stunned with fear `, `Go after her `, `You exclaim, “What is going on!?” `],
    image: `absolute-sekai.webp`,
    scenes: [
        {
            text: `You couldn’t move. You couldn’t speak.
            Your body locked up as Miku’s glowing eyes bore into you. The sheer weight of her presence crushed any thought of resistance. Your breath came in short, shallow gasps.
            She sighed, stepping closer, her expression twisting into mocking amusement. “What a hero you are,” she said, her voice dripping with sarcasm. “Truly, a warrior worthy of legend.”
            The air around her pulsed with raw power, yet she made no move to strike. She didn’t need to. You weren’t a threat.
            She turned away, already forgetting you. Somehow, that was worse than anything she could have done.`,
            options: [`Continue`],
            scenes: [{ path: ['p', 3] }]
        },
        {
            text: `You charged.
            Miku barely glanced at you before flicking her hand. A force slammed into your chest, knocking you to the ground.
            She stepped closer, eyes narrowing. “A fast-food worker?” she scoffed. “You reek of fryer grease and wasted potential.”
            You struggled up. Miku tilted her head. “Courage or stupidity?” Glyphs flickered around her fingers. “You think you can stop me?”
            The air pulsed. A sharp force hurled you into split garbage bags.
            Miku loomed over you. “Should I bother finishing this… or have you learned your place?”`,
            options: [`Continue`],
            scenes: [{ path: ['p', 3] }]
        },
        {
            text: `Dragging in a shaky breath, you took a step back, eyes darting between the still-crackling portal and the dumpster where Master Oogway had just crash-landed. Your heart pounded, your brain scrambling to process what you'd just witnessed.
            "What is going on!?" you blurted, voice cracking with panic.
            Miku turned her gaze to you, and for the first time, you felt the full weight of her presence. Her expression remained unreadable, but there was an almost amused glint in her glowing eyes.
            “Your mortal brain could not even begin to comprehend the complexity of this situation,” she said, her voice a perfect blend of synthetic harmony and raw power. “To explain it to you would be like explaining a symphony to a worm.”
            You swallowed hard, taking a shaky step back. The air around her shimmered, distorting like heat waves, her very existence too overwhelming for reality to contain.
            She took a slow step forward. “But I will say this—you're in the wrong place, at the worst possible time.” Her fingers twitched, and a surge of energy crackled in the air between you.`,
            options: [`Continue`],
            scenes: [{ path: ['p', 3] }]
        },
        {
            text: `Miku scanned her surroundings, taking in the neon signs, the flickering streetlights, the distant hum of traffic. A slow, satisfied smile crossed her face.
            “This world is nice,” she murmured. “It is mine.”
            She stepped forward, passing Master Oogway without a glance. Behind her, the old tortoise let out a labored, grief-stricken cry, his voice filled with centuries of wisdom… and sorrow.
            Struggling, he turned to you. “She will not hesitate,” he warned. “She will kill to take this world.” His breath was ragged, his strength barely holding. “And she is not alone.”
            The air shifted. A distant, chaotic chatter echoed through the streets—shrill, high-pitched war cries growing louder. On the horizon, countless small, white figures emerged, their beady eyes glowing in the dim light. The Rabbids had arrived.
            Oogway grabbed your arm, his grip weak but urgent. “You cannot face her as you are,” he said. “If you wish to stop her… you must train.”`,
            options: [`Screw this`, `Train with Oogway`],
            scenes: [{
                text: `You shake your head and walk back inside Good Burger. Flipping patties is way safer than fighting an anime pop goddess. Just as you settle back in, a portal bursts open inside the restaurant. Master Shifu stumbles out, eyes wild. “WHAT ARE YOU DOING?!” He launches into a desperate rant about Miku’s reign of terror—how she’s ravaged his world, abolished privacy, and turned society into a dystopian nightmare. “Please,” he begs, gripping your uniform. “We need you.” He stares at you, waiting for an answer. `,
                options: ["Fine, I`ll join you", `No`],
                scenes: [
                    {},
                    {
                        text: `Shifu looks flabbergasted. He never even considered that you wouldn't try to save your world. Miku portals in and grabs Shifu. Shifu: "H-How? How did you know I was here?". Miku: "I was hiding in your wifi". Miku chucks Shifu through a portal and looks at you. Miku: "Could I have a good burger meal?"`,
                        options: [],
                        scenes: [{
                            text: `Miku's face lights up with a childlike wonder. "S... Supersize?" she asks. "Dang right" You clarify. She eats her supersized meal as her heart grows three sizes. "Hey kid. You can get loads of these burgers if you worked here." She demands a job immediatly. You see no threat in her voice, and it seems she has forgotten about the rest of this world completely. You now work with miku at good burger, and have a great time doing it. <br><br>YOU REACHED THE GOOD BURGER ENDING <br><br>OPEN SECRET`,
                            ending: true
                        }],
                        secret: { item: `supersize`, option: `Supersize` }
                    }
                ]
            },
            {
                text: `Oogway opens a portal to a peaceful world.
                “Now, it’s time you learnt skadoosh” Oogway says
                He takes 40 days and 40 nights to teach you, but it’s okay since time does not pass in this dimension
                You arrive back in your world after your training, and are ready to take Miku down<br><br>
                You now know skadoosh!`,
                options: [`Continue`],
                scenes: [{
                    text: `You are in front of the miku home base, the miku-scraper. It appears like she's already started to take over your world. Your companion explains that miku has set up a field around the skyscraper to block any portals from opening inside`,
                    options: [`Continue`],
                    scenes: [{
                        text: `Oogway advises that you both enter from the basement, to avoid any real conflict. You agree with your mentor, and he creates a portal inside the sewers just outside the base's basement. You ask, "Wait, how do we get in?" Oogway explains that the entrance is a secret. An open secret. Anyone can find it. Oogway opens the wall like a doorway, and goes inside. You follow him. Inside this basement you see:`,
                        options: [`A box of goodies`, `A mall type of map (you are here type thing)`, `An elevator`, `A staircase`],
                        scenes: [{
                            text: `You gain an odd looking key. There is a container of a viscous purple fluid at the top of the key<br><br>OBTAINED ELIXER KEY`,
                            options: [`Continue`],
                            scenes: [{ path: ['p'] }],
                            item: `elixer-key`
                        }, {
                            text: `The map shows "you are here" in the basement. The map shows that the skyscraper is terribly unorganized, with a web diagram tangled over the whole thing showing many paths for portals. Oogway says this is an attempt at confusing any intruders, but he's seen many miku-scrapers in his day, so he'll guide you through this one easily. He points to the map and says it's best to take the elevator here`,
                            options: [`Continue`],
                            scenes: [{ path: ['p'] }]
                        }, {
                            text: `You press the button and wait for the elevator to open. As it does, you see a few of miku's soldiers inside. They both recognize Oogway and turn to him. They immediatly ask for an autograph. Oogway chuckles and grants their wish. "You know, peace is always the best option to take, if the oppurtunity presents itself." You heed the words of your master and continue. The elevator leads straight up to the second highest floor before stopping. "This is as high as it will go. I mean it'll go higher if we had more authority, but this is pretty good all things considered." You see a reception desk guarding an intimidating staircase. The person manning the desk is LeBron. "Do y'all have an appointment?"`,
                            options: [`Yes, of course!`, `No. We are here to stop Miku`],
                            scenes: [{
                                text: `LeBron eyes you disapprovingly. "Guys, I'm the goat. You really think I can't see through a simple little lie like that?" Lebron grabs you Omni-man style. "And to think I thought you were worthy enough to stop Miku. I want to make this world a better place. And that starts by removing you from it" As LeBron says this, he flies and crashes through the window. He holds you over the street, about 2,000 ft in the air. He drops you (if you've been dropped in another ending he says "heh. feels like we've done this before, huh?").<br><br>YOU DIE`,
                                ending: true
                            }, {
                                text: `LeBron chuckles a little bit. "Yeah, I was getting tired of her reign too. Y'all are free to head on back there, do whatever you want lmao" You both head up the staircase and see Miku, sitting with her back to you both as she looks at the skyline. She doesn't say anything. Oogway: "She knows we're here. There's no point in hiding this." Miku is startled, and looks back at the both of you. "Since when did you two get in here?? None of my alarms went off! No matter. There's no way either of you could stop me now. I'm so deeply rooted in everyone's wifi that there's no point in even attempting to halt my expansion."`,
                                options: [`Ask Oogway for help`, `Nuh uh!! (Attack)`],
                                scenes: [{
                                    text: `Oogway knows you can take her in a fight, but decides against it. You are reminded of Oogway's words, and also decide that peace would be a better option. How do you attempt to convince her not to conquer this world?`,
                                    options: [`Do a flip`, `Offer a game of slots`, `Talk Miku out of it`],
                                    scenes: [{
                                        text: `Miku lets out an obvious pog, but her decision is unwavering. She decides to take your life.<br><br>YOU DIE`,
                                        ending: true
                                    }, {
                                        text: `You explain the concept of slots, and Miku is intrigued. The thought of making money easily has piqued her interest. She demands you show her the way, and offers a vehicle. It's one of the cars from fortnite. You both make it to Vegas, and Miku is in awe of everything. She decides to spare this world, because of this beautiful game. You end up gambling a bunch with Miku, and both end up as best friends by the end of it.<br><br>YOU REACHED THE GAMBLING ENDING`,
                                        ending: true
                                    }, {
                                        text: `You begin to imitate Steven Universe. "Miku... this isn't like you!" Miku, to be frank, is insulted that you would ever say such a thing and Miku Miku beams you on the spot.<br><br>YOU DIE`,
                                        ending: true
                                    }]
                                },{
                                    // rhythm game
                                }]
                            }]
                        }, {
                            text: `You walk up the staircase with Master Oogway to see a group of high level intimidating guards on the ground floor`,
                            options: [`Continue`],
                            secret: {item: `drip`, option: `Whip out the drip`},
                            scenes: [{
                                text: `Without warning, they attack, giving no time for you to think. This must have been why Oogway said to avoid this floor. You have learned your lesson.<br><br>YOU DIE`,
                                ending: true
                            }, {
                                text: `You pull out the Miku drip and they are all taken aback. Peter Griffin looks you up and down, and says, "Heheh this is like that time we did the drip contest." Suddenly, your vision cuts out and you see Miku standing in front of a group of people. As you look closer, you see that these people are actually those same guards, but they are all dripped out the wazoo. They seem to be having a contest for who's the drippiest. Miku, of course, wins this with her savage lil' drip coat. Your vision comes back, and all the guards are laughing remembering their good times. Peter walks over to you and puts a hand on your shoulder. "Hey kid, why don't you work with us? Times like this don't happen often, but when they do, it's the best time ever. I can't believe I ever forgot about this."`,
                                options: [`Yeah I'll take the job`, `Nah I'm good. Thanks tho!`],
                                scenes: [{
                                    text: `"Good choice, kid!" As one of Miku's guards, you go on to rank pretty high in the group. After a while, you get to the point where you get to host monthly drip contests. Miku judges all of these, of course, but you still have the honor of giving everyone the oppurtunity to express themselves and unwind. You can't believe you ever thought of taking these people down, and removing their culture from this planet. Also Oogway is executed for being a traitor<br><br>YOU REACHED THE DRIP ENDING<br>OPEN SECRET`,
                                    ending: true
                                }, {
                                    text: `Peter says, "No worries kid.  But if you're trying to get to Miku, go down and take the elevator."`,
                                    options: [`Take the elevator`],
                                    scenes: [{path: ['p', 'p', 'p', 2]}]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        },
        // the debug pathway
        { path: [3, 1, 0, 0] }
    ]
};

// prints text to screen and handles prompts
Object.prototype.run = function () {
    this.openSecrets();

    text.innerHTML = this.text;
    options.innerHTML = ``;
    if ('options' in this) {
        for (option of this.options) {
            options.innerHTML += `<li>${option}</li>`
        }
    }
    if ('image' in this) {
        image.src = this.image;
    }

    if (this.item) {
        inventory[this.item] = true;
    }

    let object = this;

    submit.addEventListener(`click`, function select() {
        if (input.value < object.options.length && input.value >= 0 && input.value) {
            submit.removeEventListener(`click`, select);

            if (!('scenes' in object.scenes[input.value]) && !object.scenes[input.value].ending) {
                object.scenes[input.value].findPath().run();
            } else {
                object.scenes[input.value].run();
            }

            input.value = null;
        }
    })
}

// adds parents to all the objects
Object.prototype.addParents = function () {
    for (scene of this.scenes) {
        if (!('scenes' in scene)) {
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
Object.prototype.findPath = function () {
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

// add secret option if applicable
Object.prototype.openSecrets = function () {
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