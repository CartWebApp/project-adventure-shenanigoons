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
        item: `string of the item to be added to the inventory`
        
        // if want scene to go up to parent and down path { path: ['p', (num of option), ...] }

        // mabye add fonts perchance
    }
*/
let m = 0;
let typeWriterVersion = 0;
let typeWriterInput;
let typeSpeed = 17.5;
// lets us bring stored inventory into the game
let inventory;
if (!localStorage.inventory) {
    inventory = {};
} else {
    inventory = JSON.parse(localStorage.getItem("inventory"));;
}

const relationshipBlunders = {
    teto: 0,
    gabriel: 0,
    walter: 0,
    iceBear: 0,
    john: 0
}

const story = {
    function: () => {
        // reset blunders
        relationshipBlunders.walter = 0;
        relationshipBlunders.teto = 0;
        relationshipBlunders.iceBear = 0;
        relationshipBlunders.gabriel = 0;

        // reset votes
        delete inventory.walter;
        delete inventory.teto;
        delete inventory.iceBear;
        delete inventory.gabriel;

        let dripPath = { path: [`P`, 3, 0, 1, 1, 0, 1] };
        delete dripPath.findPath().locked;

        let keyPath = { path: [`P`, 3, 1, 0, 0, 0] };
        delete keyPath.findPath().locked;
    },
    text: `Miku steps forward, crossing into your world`,
    cutscene: [{ text: `The night shift at Good Burger was supposed to be uneventful. The parking lot was empty, the distant hum of traffic the only sound as you hauled a garbage bag toward the dumpster. Then, the air changed.`, image: `images/first-cutscene/1.jpg` }, { text: `A deep hum vibrated through the lot, and with a sudden crack, a portal tore open above the dumpster, swirling with neon blue energy. Inside, two figures clashed—Master Oogway, standing firm, and Hatsune Miku, a streak of turquoise light moving with impossible speed.`, image: `images/first-cutscene/2.jpg` }, { text: `“You do not belong here,” Oogway said, deflecting a strike with his staff.`, image: `images/first-cutscene/3.jpg` }, { text: `Miku’s teal eyes gleamed. “And you do?”`, image: `images/first-cutscene/4.jpg` }, { text: `She unleashed a wave of energy, sharp crescents of sound cutting through the air. Oogway spun his staff, dispersing them, but she was already gone—a blur that reappeared above him. Her foot crashed into his shell, a burst of cyan energy erupting on impact.`, image: `images/first-cutscene/5.jpg` }, { text: `With a resounding crash, Oogway was blasted from the portal, spinning through the air before slamming into the Good Burger dumpster.`, image: `images/first-cutscene/6.jpg` }, { text: `You froze, gripping the garbage bag like it was your last defense. The portal still crackled with energy. On the other side, Miku’s gaze shifted from the fallen Oogway… to you.`, image: `images/first-cutscene/7.jpg` }, { text: `From inside the dumpster, Oogway’s muffled voice weakly urged, “Go… after her…”`, image: `images/first-cutscene/8.jpg` }],
    options: [`Stay paralyzed, stunned with fear`, `Go after her`, `“What is going on!?”`],
    image: `images/first-cutscene/9.jpg`,
    scenes: [
        {
            text: `She turned away, already forgetting you. Somehow, that was worse than anything she could have done.`,
            image: `images/first-fork/1-3.jpg`,
            cutscene: [{ text: `You couldn’t move. You couldn’t speak. Your body locked up as Miku’s glowing eyes bore into you. The sheer weight of her presence crushed any thought of resistance.`, image: `images/first-fork/1-1.jpg` }, { text: `She sighed, stepping closer, her expression twisting into mocking amusement. “What a hero you are,” she said, her voice dripping with sarcasm. “Truly, a warrior worthy of legend.” The air around her pulsed with raw power, yet she made no move to strike. She didn’t need to. You weren’t a threat.`, image: `images/first-fork/1-2.jpg` }],
            options: [`Continue`],
            scenes: [{ path: ['p', 3] }]
        },
        {
            text: `Miku loomed over you. “Should I bother finishing this… or have you learned your place?”`,
            image: `images/first-fork/2-6.jpg`,
            cutscene: [{ text: `You charged.`, image: `images/first-fork/2-1.jpg` }, { text: `Miku barely glanced at you before flicking her hand. A force slammed into your chest, knocking you to the ground.`, image: `images/first-fork/2-2.jpg` }, { text: `She stepped closer, eyes narrowing. “A fast-food worker?” she scoffed. “You reek of fryer grease and wasted potential.”`, image: `images/first-fork/2-3.jpg` }, { text: `You struggled up. Miku tilted her head. “Courage or stupidity?” Glyphs flickered around her fingers. “You think you can stop me?”`, image: `images/first-fork/2-4.jpg` }, { text: `The air pulsed. A sharp force hurled you into split garbage bags.`, image: `images/first-fork/2-5.jpg` }],
            options: [`Continue`],
            scenes: [{ path: ['p', 3] }]
        },
        {
            text: `She took a slow step forward. “But I will say this—you're in the wrong place, at the worst possible time.” Her fingers twitched, and a surge of energy crackled in the air between you.`,
            image: `images/first-fork/3-6.jpg`,
            cutscene: [{ text: `Dragging in a shaky breath, you took a step back, eyes darting between the still-crackling portal and the dumpster where Master Oogway had just crash-landed. Your heart pounded, your brain scrambling to process what you'd just witnessed.`, image: `images/first-fork/3-1.jpg` }, { text: `"What is going on!?" you blurted, voice cracking with panic.`, image: `images/first-fork/3-2.jpg` }, { text: `Miku turned her gaze to you, and for the first time, you felt the full weight of her presence. Her expression remained unreadable, but there was an almost amused glint in her glowing eyes.`, image: `images/first-fork/3-3.jpg` }, { text: `“Your mortal brain could not even begin to comprehend the complexity of this situation,” she said, her voice a perfect blend of synthetic harmony and raw power. “To explain it to you would be like explaining a symphony to a worm.”`, image: `images/first-fork/3-4.jpg` }, { text: `You swallowed hard, taking a shaky step back. The air around her shimmered, distorting like heat waves, her very existence too overwhelming for reality to contain.`, image: `images/first-fork/3-5.jpg` }],
            options: [`Continue`],
            scenes: [{ path: ['p', 3] }]
        },
        {
            text: `Oogway grabbed your arm, his grip weak but urgent. “You cannot face her as you are,” he said. “If you wish to stop her… you must train.”`,
            image: `images/call-to-action/6.jpg`,
            cutscene: [{ text: `Miku scanned her surroundings, taking in the neon signs, the flickering streetlights, the distant hum of traffic. A slow, satisfied smile crossed her face`, image: `images/call-to-action/1.jpg` }, { text: `“This world is nice,” she murmured. “It is mine.”`, image: `images/call-to-action/2.jpg` }, { text: `She stepped forward, passing Master Oogway without a glance. Behind her, the old tortoise let out a labored, grief-stricken cry, his voice filled with centuries of wisdom… and sorrow.`, image: `images/call-to-action/3.jpg` }, { text: `Struggling, he turned to you. “She will not hesitate,” he warned. “She will kill to take this world.” His breath was ragged, his strength barely holding. “And she is not alone.”`, image: `images/call-to-action/4.jpg` }, { text: `The air shifted. A distant, chaotic chatter echoed through the streets—shrill, high-pitched war cries growing louder. On the horizon, countless small, white figures emerged, their beady eyes glowing in the dim light. The Rabbids had arrived.`, image: `images/call-to-action/5.jpg` }],
            options: [`Screw this`, `Train with Oogway`],
            scenes: [
                {
                    text: `“Please,” he begs, gripping your uniform. “We need you.” He stares at you, waiting for an answer`,
                    image: `images/refusal/4.jpg`,
                    cutscene: [{ text: `You shake your head and walk back inside Good Burger. Flipping patties is way safer than fighting an anime pop goddess`, image: `images/refusal/1.jpg` }, { text: `Just as you settle back in, a portal bursts open inside the restaurant. Master Shifu stumbles out, eyes wild`, image: `images/refusal/2.jpg` }, { text: `“WHAT ARE YOU DOING?!” He launches into a desperate rant about Miku’s reign of terror—how she’s ravaged his world, abolished privacy, and turned society into a dystopian nightmare`, image: `images/refusal/3.jpg` }],
                    options: ["Fine, I`ll join you", `No`],
                    scenes: [
                        {
                            text: `Shifu opens a portal and you follow him through. You are in front of the miku home base (the miku-scraper). It appears like she's already started to take over your world. Your companion explains that miku has set up a field around the skyscraper to block any portals from opening inside`,
                            options: [`Continue`],
                            scenes: [{
                                text: `"Heh, yeahhh, no freakin’ way that’s happenin’" Peter Griffin interjects`,
                                cutscene: [{ text: `Shifu knows that Miku is too powerful to take on alone. He knows of a few high level guards inside the building, and thinks you both would be able to convince that group to join you both and lay siege on Miku. You don't share his optimism, but you let him lead the way` }, { text: `You both walk in the front door of the miku-scraper to see a group of guards having a potluck on the ground floor. They recognize Shifu, and clamor around him, greeting him, dapping him up and the like.` }, { text: `Shifu talks about your plans to stop Miku's takeover, and the clamoring stops.` }],
                                options: [`Oh ok I'll just do it myself then`, `Think of the lives at stake!`, `It'd be funny`],
                                scenes: [{
                                    text: `He picks you up and flies you to the top of the skyscraper. "G'bye kid. This is just part of the job description" He drops you. YOU DIE`,
                                    cutscene: [{ text: `"You’re really pushin’ my buttons here, kid. Hey LeBron, do your thing!" As Peter says this, LeBron flies over to you from a corner in the room.` }],
                                    options: [`Go back`, `Restart from beginning`],
                                    scenes: [{ path: [`p`] }, { path: [`P`] }]
                                }, {
                                    text: `"Look, I already told ya—I can’t control these things, alright?" Peter Griffin explains, "But hey, this was actually pretty eye-openin’"`,
                                    cutscene: [{ text: `As you say this, your vision cuts. You see a broken world, where people are both scared to die and be alive. There are posters of Miku's face everywhere` }, { text: `Your vision cuts back, and you look around. Everyone seems to have had the same vision as you` }, { text: `"You have to warn us before you use a cutaway gag" Shifu scolds` }],
                                    options: [`Continue`],
                                    scenes: [{
                                        function: () => {
                                            // reset votes
                                            delete inventory.walter;
                                            delete inventory.teto;
                                            delete inventory.iceBear;
                                            delete inventory.gabriel;
                                        },
                                        text: `You see him step over to a corner where many guards are. Most guards seem taken aback by this proposition. You see four high ranking guards besides Peter in that corner, all of them eyeing you both. You'll only need to convince two of them to get a majority vote.\n\nIf you lose 3 relationship points that person’s vote is locked out and cannot be accessed again.`,
                                        cutscene: [{ text: `Peter says, "I'll call for a vote in the guards' super fancy council thing about launchin’ a siege on Miku. You got my vote, obviously—but yeah, you're gonna have to sweet-talk the rest of those guys"` }],
                                        options: [`Continue`],
                                        scenes: [{
                                            text: `Who do you approach?`,
                                            options: [`A man with sunglasses and a hat`, `Twintailed drilly haired redhead`, `A polar bear`, `A curly haired man`],
                                            scenes: [
                                                {
                                                    text: `You approach Walter White, and he eyes you catiously`,
                                                    options: [`We have to cook`, `Think of Walter White Jr.`],
                                                    scenes: [{
                                                        text: `With what lab? Miku stole my RV once I joined her army\n\n-1 relationship point!`,
                                                        options: [`Continue`],
                                                        scenes: [{ path: [`p`] }, {
                                                            text: `With what lab? Miku stole my RV once I joined her army. You know what, I'm tired of this. I'm voting against the rebellion\n\nYou lost Walter's vote!`,
                                                            options: [`Continue`],
                                                            scenes: [{ path: [`p`, `p`, `p`] }]
                                                        }],
                                                        blunder: { name: `walter`, count: 1 },
                                                        lock: {
                                                            paths: [{ path: [`p`] }],
                                                            condition: () => relationshipBlunders.walter >= 3,
                                                            scene: { path: [1] }
                                                        }
                                                    }, {
                                                        text: `How could I forget? Under Miku's reign, he's in real danger. She really likes picking on disabled kids. The situation here is too dangerous to agitate it.`,
                                                        options: [`You can’t leave him to die, Walter!`, `Danger? I am the danger`],
                                                        scenes: [{
                                                            text: `Walter is taken aback by this. "Who do you think you are?? To ask me for help, and insult ME in YOUR time of need? You're on thin ice, pal"\n\n-2 relationship points!!`,
                                                            options: [`Focus up Walter`],
                                                            scenes: [{ path: [`p`] }, {
                                                                text: `Walter is taken aback by this. "Who do you think you are?? To ask me for help, and insult ME in YOUR time of need? I'm done with you. I'm voting against the rebellion\n\nYou lost Walter's vote!`,
                                                                options: [`Continue`],
                                                                scenes: [{ path: [`p`, `p`, `p`, `p`] }]
                                                            }],
                                                            blunder: { name: `walter`, count: 2 },
                                                            lock: {
                                                                paths: [{ path: [`p`, `p`] }], condition: () => relationshipBlunders.walter >= 3, scene: { path: [1] }
                                                            }
                                                        }, {
                                                            text: `Say that again?`,
                                                            options: [`Danger? I am the danger`],
                                                            scenes: [{
                                                                text: `flungoid?`,
                                                                options: [`It's a default thing this should never show up in game GRINGUS BUNK DORK SHLINK DONK`],
                                                                scenes: [{
                                                                    text: `You see Walter's face light up with a childlike wonder "I haven't heard those words in 14 years. Alright kid, you have my vote."\n\nYOU HAVE WALTER'S VOTE!`,
                                                                    options: [`Continue`],
                                                                    scenes: [{ path: [`p`, `p`, `p`, `p`, `p`] }],
                                                                }],
                                                                item: 'walter',
                                                                lock: {
                                                                    paths: [{ path: [`p`, `p`, `p`] }], condition: () => true, scene: { path: [0] }
                                                                }
                                                            }]
                                                        }]
                                                    }, {
                                                        text: `Not asking any questions, you fill a vial with this dark elixir, and you head back to Good Burger, with your new secret ingredient.\n\nYOU HAVE RETURNED WITH THE ELIXIR\nOPEN SECRET`,
                                                        cutscene: [{ text: `We have to cook! I know exactly where to use this. Come on, Pinkman` }, { text: `You find a remote village, and in this village you see a Barbaric King and an Archer Queen` }, { text: `Walter explains, “We need to cook"` }, { text: `The monarchs lead you to a cave, showing you a massive vat of Dark Elixir` }],
                                                        options: [`Play again`],
                                                        scenes: [{ path: [`P`] }]
                                                    }],
                                                    secret: { item: `elixir-key`, option: `*pull out the elixir key* We HAVE to cook` }
                                                }, {
                                                    text: `You start heading to the drilly haired redhead Kasane Teto, and she is not happy. "Just who do you two think you are?? One cannot simply walk into Miku's base and stage a takeover!"`,
                                                    options: [`Start singing Teto Territory`, `Would you do it for a baguette?`, `But you would like to stop Miku, right?`],
                                                    scenes: [{
                                                        text: `flungoid?`,
                                                        options: [`It's a default thing this should never show up in game GRINGUS BUNK DORK SHLINK DONK`],
                                                        scenes: [{
                                                            text: `heheh it's the thing lmao. aight you have my vote kid that was pretty good\n\nYOU HAVE TETO'S VOTE!`,
                                                            options: [`Continue`],
                                                            scenes: [{ path: [`p`, `p`, `p`] }],
                                                        }],
                                                        item: 'teto',
                                                        lock: {
                                                            paths: [{ path: [`p`] }], condition: () => true, scene: { path: [0] }
                                                        }
                                                    }, {
                                                        text: `No, idiot. I like baguettes but I'm not frickin' Scooby Doo. And even if I was, you don't even have one.\n\n-2 relationship point!!`,
                                                        options: [`Start singing Teto Territory`, `But you would like to stop Miku, right?`],
                                                        scenes: [{ path: [`p`, 0] }, { path: [`p`, 2] }, {
                                                            text: `No, idiot. I like baguettes but I'm not frickin' Scooby Doo. Y'know what that pissed me off you just lost my vote nerd\n\nYOU LOST TETO'S VOTE!`,
                                                            options: [`Continue`],
                                                            scenes: [{ path: [`p`, `p`, `p`] }]
                                                        }],
                                                        blunder: { name: `teto`, count: 2 },
                                                        lock: {
                                                            paths: [{ path: [`p`] }], condition: () => relationshipBlunders.teto >= 3, scene: { path: [2] }
                                                        }
                                                    }, {
                                                        text: `Of course I'd like to overthrow Miku you idiot! It's just that none of us are powerful enough to do that!`,
                                                        options: [`If we team up we can take her down`, `I can, watch this!`],
                                                        scenes: [{
                                                            text: `flungoid?`,
                                                            options: [`It's a default thing this should never show up in game GRINGUS BUNK DORK SHLINK DONK`],
                                                            scenes: [{
                                                                text: `That makes sense, but I'm not sure if the others will agree. Okay kid, you have my vote. IF the others are willing to go along with you too\n\nYOU HAVE TETO'S VOTE!`,
                                                                options: [`Continue`],
                                                                scenes: [{ path: [`p`, `p`, `p`, `p`] }],
                                                            }],
                                                            item: 'teto',
                                                            lock: {
                                                                paths: [{ path: [`p`, `p`] }], condition: () => true, scene: { path: [0] }
                                                            }
                                                        }, {
                                                            text: `...watch what?`,
                                                            options: [`Do backflips`, `Sike, haha!`, `Go literally insane`],
                                                            scenes: [{
                                                                text: `You faceplant HARD. "You kinda suck at this y'know"\n\n-1 relationship point!`,
                                                                options: [`*change subject* You wanted to overthrow Miku, right?`],
                                                                scenes: [{ path: [`p`, `p`] }, {
                                                                    text: `You faceplant HARD. "...yeah you just lost my vote kid"\n\nYOU LOST TETO'S VOTE!`,
                                                                    options: [`Continue`],
                                                                    scenes: [{ path: [`p`, `p`, `p`, `p`, `p`] }]
                                                                }],
                                                                blunder: { name: `teto`, count: 1 },
                                                                lock: {
                                                                    paths: [{ path: [`p`, `p`, `p`] }], condition: () => relationshipBlunders.teto >= 3, scene: { path: [1] }
                                                                }
                                                            }, {
                                                                text: `dude c'mon i wanted to see smth cool\n\n-1 relationship point!`,
                                                                options: [`yeah sry lol. You wanted to overthrow Miku, right?`],
                                                                scenes: [{ path: [`p`, `p`] }, {
                                                                    text: `...screw you dude\n\nYOU JUST LOST TETO'S VOTE!`,
                                                                    options: [`Continue`],
                                                                    scenes: [{ path: [`p`, `p`, `p`, `p`, `p`] }]
                                                                }],
                                                                blunder: { name: `teto`, count: 1 },
                                                                lock: {
                                                                    paths: [{ path: [`p`, `p`, `p`] }], condition: () => relationshipBlunders.teto >= 3, scene: { path: [1] }
                                                                }
                                                            }, {
                                                                text: `flungoid?`,
                                                                options: [`It's a default thing this should never show up in game GRINGUS BUNK DORK SHLINK DONK`],
                                                                scenes: [{
                                                                    text: `You start shaking about ferally and frothing at the mouth. "lmao your just like me fr. Dude you're kinda hittin' that! You just earned my vote"\n\nYOU HAVE TETO'S VOTE!`,
                                                                    options: [`Continue`],
                                                                    scenes: [{ path: [`p`, `p`, `p`, `p`, `p`] }],
                                                                }],
                                                                item: 'teto',
                                                                lock: {
                                                                    paths: [{ path: [`p`, `p`, `p`] }], condition: () => true, scene: { path: [0] }
                                                                }
                                                            }]
                                                        }]
                                                    }]
                                                }, {
                                                    text: `You approach ice bear. He's holding his axe.`,
                                                    options: [`*say nothing*`, `Nice axe`, `Wanna help stop Miku?`],
                                                    scenes: [{
                                                        text: `Don't mock ice bear\n\n-1 relationship point!`,
                                                        options: [`Continue`],
                                                        scenes: [{ path: [`p`] }, {
                                                            text: `Don't mock ice bear\n\nYOU JUST LOST ICE BEAR'S VOTE!`,
                                                            options: [`Continue`],
                                                            scenes: [{ path: [`p`, `p`, `p`] }]
                                                        }],
                                                        blunder: { name: `iceBear`, count: 1 },
                                                        lock: {
                                                            paths: [{ path: [`p`] }], condition: () => relationshipBlunders.iceBear >= 3, scene: { path: [1] }
                                                        }
                                                    }, {
                                                        text: `Ice bear says nothing. You assume he appreciates the compliment. “You could probably take Miku down yourself if you tried” "Ice bear does not see a point to that"`,
                                                        options: [`Think of how many people you could save`, `You could be a king, Ice Bear`, `What would Grizz think?`],
                                                        scenes: [{
                                                            text: `Ice bear knows another tyrant will take Miku's place\n\n-1 relationship point`,
                                                            options: [`You could be a king, Ice Bear`, `What would Grizz think?`],
                                                            scenes: [{ path: [`p`, 1] }, { path: [`p`, 2] }, {
                                                                text: `Ice bear sighs. "Ice bear knows another tyrant will take Miku's place"\n\nYOU LOST ICE BEAR'S VOTE!`,
                                                                options: [`Continue`],
                                                                scenes: [{ path: [`p`, `p`, `p`, `p`] }]
                                                            }],
                                                            blunder: { name: `iceBear`, count: 1 },
                                                            lock: {
                                                                paths: [{ path: [`p`, `p`] }], condition: () => relationshipBlunders.iceBear >= 3, scene: { path: [2] }
                                                            }
                                                        }, {
                                                            text: `Ice bear believes that Ice bear's rule would be more tyrannical than Miku's\n\n-1 relationship point!`,
                                                            options: [`Think of how many people you could save`, `What would Grizz think?`],
                                                            scenes: [{ path: [`p`, 0] }, { path: [`p`, 2] }, {
                                                                text: `Ice bear sighs. "Ice bear believes that Ice bear's rule would be more tyrannical than Miku's"\n\nYOU LOST ICE BEAR'S VOTE`,
                                                                options: [`Continue`],
                                                                scenes: [{ path: [`p`, `p`, `p`, `p`] }]
                                                            }],
                                                            blunder: { name: `iceBear`, count: 1 },
                                                            lock: {
                                                                paths: [{ path: [`p`, `p`] }], condition: () => relationshipBlunders.iceBear >= 3, scene: { path: [2] }
                                                            }
                                                        }, {
                                                            text: `dont look at this user plz i beg of you`,
                                                            options: [`NOT THIS EITHER!!1! DONT LOOK AT THPS ONE EITHER!!!`],
                                                            scenes: [{
                                                                text: `Ice bear flinches. He has now gotten even quieter than he was. Ice bear is in deep reflection. He looks you dead on, and gives a nod.\n\nYOU HAVE ICE BEAR'S VOTE!`,
                                                                options: [`Continue`],
                                                                scenes: [{ path: [`p`, `p`, `p`, `p`] }]
                                                            }],
                                                            item: `iceBear`,
                                                            lock: {
                                                                paths: [{ path: [`p`, `p`] }], condition: () => true, scene: { path: [0] }
                                                            }
                                                        }]
                                                    }, {
                                                        text: `Ice Bear would be commiting treason\n\n-1 relationship point!`,
                                                        options: [`Oh yeah`],
                                                        scenes: [{ path: [`p`] }, {
                                                            text: `Ice Bear would be commiting treason\n\nYOU JUST LOST ICE BEAR'S VOTE!`,
                                                            options: [`Continue`],
                                                            scenes: [{ path: [`p`, `p`, `p`] }]
                                                        }],
                                                        blunder: { name: `iceBear`, count: 1 },
                                                        lock: {
                                                            paths: [{ path: [`p`] }], condition: () => relationshipBlunders.iceBear >= 3, scene: { path: [1] }
                                                        }
                                                    }]
                                                }, {
                                                    text: `You approach Gabriel and he daps you and Shifu up. "Waddup gang. You want smth?" Gabriel summons a mini fridge`,
                                                    options: [`Nah that's ok`, `Yeah I'll take a Butterbeer`, `Yeah I'll take some blinker fluid`, `Yeah lemme get some silly string`, `Yeah I'll get myself a Kool-Aid`, `Yeah I'll take a Dr. Pepper`, `Yeah I'll take a Dark Elixir`, `Yeah I'll take a Duff Beer`, `Yeah I'll take a Nuka Cola`],
                                                    scenes: [{
                                                        text: `Just take smth man\n\n-1 relationship point!`,
                                                        options: [`Ok`],
                                                        scenes: [{ path: [`p`] }, {
                                                            text: `Dude just get smth. Screw you dude\n\nYOU LOST GABRIEL'S VOTE!`,
                                                            options: [`Continue`],
                                                            scenes: [{ path: [`p`, `p`, `p`] }]
                                                        }],
                                                        blunder: { name: `gabriel`, count: 1 },
                                                        lock: {
                                                            paths: [{ path: [`p`] }], condition: () => relationshipBlunders.gabriel >= 3, scene: { path: [1] }
                                                        }
                                                    }, {
                                                        text: `Nah get smth good\n\n-1 relationship point!`,
                                                        options: [`Ok`],
                                                        scenes: [{ path: [`p`] }, {
                                                            text: `Dude your taste sucks\n\nYOU LOST GABRIEL'S VOTE!`,
                                                            options: [`Continue`],
                                                            scenes: [{ path: [`p`, `p`, `p`] }]
                                                        }],
                                                        blunder: { name: `gabriel`, count: 1 },
                                                        lock: {
                                                            paths: [{ path: [`p`] }], condition: () => relationshipBlunders.gabriel >= 3, scene: { path: [1] }
                                                        }
                                                    }, { path: [1] }, { path: [1] }, { path: [1] }, {
                                                        text: `dont looky at this goofball teehee`,
                                                        options: [`not this either teehee-er`],
                                                        scenes: [{
                                                            text: `Hell yeah. Gabriel comes in for another dap up. You both clap harder than anyone has ever clapped before. This clap shakes the skyscraper, the surrounding city, and even LeBron\n\nYOU HAVE GABRIEL'S VOTE`,
                                                            options: [`Continue`],
                                                            scenes: [{ path: [`p`, `p`, `p`] }]
                                                        }],
                                                        item: `gabriel`,
                                                        lock: {
                                                            paths: [{ path: [`p`] }], condition: () => true, scene: { path: [0] }
                                                        }
                                                    }, { path: [1] }, { path: [1] }, { path: [1] }]
                                                }, {
                                                    text: `He drops you\n\nYOU DIE`,
                                                    cutscene: [{ text: `The guards take their vote. They decide as a group that your plan is not worth the effort or risk` }, { text: `Peter sighs. "I’m a man of my word, kid. Gotta roll with their decision, even if I think you’re right. Really hate doin’ this to ya, but... yeah. LeBron—go ahead, buddy. You know the drill"` }, { text: `"Already on it big guy" LeBron flies over to you. He picks you up and flies you to the top of the skyscraper. "G'bye kid. This is just part of the job description"` }],
                                                    options: [`Go back`, `Restart from beginning`],
                                                    scenes: [{ path: [`p`, `p`] }, { path: [`P`] }, {
                                                        text: `"I'll take care of you myself"\n\nUse DFJK keys to control the rhythm game`,
                                                        cutscene: [{ text: `"Alrighty then—what the hell are we standin’ around for? LeBron, fire it up and take us up there!"` }, { text: `"You got it, big guy." LeBron groups all of you up, and dunks you into the top floor of the Miku scraper` }, { text: `Miku knew you all were approaching, so she isn't surprised` }, { text: `"I thought you'd all be smarter than that. You're all fired"` }, { text: `"And for you?"` }],
                                                        options: [`*square up*`],
                                                        scenes: [{
                                                            text: ``,
                                                            options: [],
                                                            scenes: [{
                                                                text: `"Didn't you listen? I've told you many times already that your resistance was futile. You're so pathetic. I wouldn't even keep you as a slave in my empire." Miku charges her classic Miku Miku Beam and executes you on the spot\n\nYOU DIE`,
                                                                options: [`Retry game`, `Restart from beginning`],
                                                                scenes: [{ path: [`p`] }, { path: [`P`] }]
                                                            }, {
                                                                text: `She has her Miku Miku Beam charged and ready`,
                                                                cutscene: [{ text: `Miku coughs up blood from singing her heart out. "W-What?? H-How could YOU ever even BEGIN to think you could beat me? Is this really my final breath?"` }, { text: `Miku laughs "haha lmao jk" She starts counting down. 1... 2... 3... "Ready?"` }],
                                                                options: [`There is nothing we can do`],
                                                                scenes: [{
                                                                    text: `"If you only do what you can do, you'll never be better than what you are. But don't kill yourself like I did, okay?" Shifu dies\n\nYOU REACHED THE TRAGIC VICTORY ENDING`,
                                                                    cutscene: [{ text: `Miku fires her beam, but master Shifu steps between you and her` }, { text: `As Shifu takes most of the blast, Ice Bear and Gabriel jump Miku. Miku is pinned now. Walter comes over to her and takes her out point blank. Teto just dances and watches the whole spectacle` }, { text: `Shifu is on the ground, severely injured from the blast. You hold Shifu as he takes his final breaths` }],
                                                                    options: [`Play again`],
                                                                    scenes: [{ path: [`P`] }]
                                                                }]
                                                            }],
                                                            startGame: true
                                                        }]
                                                    }],
                                                    lock: {
                                                        paths: [], condition: () => {
                                                            let voteCount = 0;
                                                            if (inventory.walter) voteCount++;
                                                            if (inventory.teto) voteCount++;
                                                            if (inventory.iceBear) voteCount++;
                                                            if (inventory.gabriel) voteCount++;

                                                            // reset blunders
                                                            relationshipBlunders.walter = 0;
                                                            relationshipBlunders.teto = 0;
                                                            relationshipBlunders.iceBear = 0;
                                                            relationshipBlunders.gabriel = 0;

                                                            // unlock paths
                                                            let walterPath = { path: [`P`, 3, 0, 0, 0, 1, 0, 0, 0] }
                                                            delete walterPath.findPath().locked;

                                                            let tetoPath = { path: [`P`, 3, 0, 0, 0, 1, 0, 0, 1] }
                                                            delete tetoPath.findPath().locked;

                                                            let iceBearPath = { path: [`P`, 3, 0, 0, 0, 1, 0, 0, 2] }
                                                            delete iceBearPath.findPath().locked;

                                                            let gabrielPath = { path: [`P`, 3, 0, 0, 0, 1, 0, 0, 3] }
                                                            delete gabrielPath.findPath().locked;

                                                            if (voteCount >= 2) {
                                                                return true;
                                                            }
                                                        }, scene: { path: [2] }
                                                    }
                                                }],
                                            lock: {
                                                paths: [], condition: () => {
                                                    let voteCount = 0;
                                                    if (inventory.walter) voteCount++;
                                                    if (inventory.teto) voteCount++;
                                                    if (inventory.iceBear) voteCount++;
                                                    if (inventory.gabriel) voteCount++;

                                                    let blunderCount = 0;
                                                    if (relationshipBlunders.walter >= 3) blunderCount++;
                                                    if (relationshipBlunders.teto >= 3) blunderCount++;
                                                    if (relationshipBlunders.iceBear >= 3) blunderCount++;
                                                    if (relationshipBlunders.gabriel >= 3) blunderCount++;

                                                    if (voteCount >= 2 || blunderCount >= 3) return true;
                                                }, scene: { path: [4] }
                                            }
                                        }]
                                    }]
                                }, {
                                    text: `Hey, losing my job ain’t no joke, kid. You get it, don’t ya? Bein’ stuck in a job you can’t stand? I got your file right here, and I see you’ve been workin’ at that crappy burger joint for, what, 15 years? Yeah, you don’t like it any more than I do, but hey, sometimes you gotta do what you gotta do to make it through the day`,
                                    options: [`I am NOTHING like you`, `wait but i love good burger`],
                                    scenes: [{ path: ['p', 0] }, {
                                        text: `So, lemme show ya the ropes—let me teach ya how to supersize a goodburger meal!"`,
                                        cutscene: [{ text: `Peter sighs. "I don’t get you, kid. You’ve been stuck at that job for, what, half your life? No promotion, no change, just the same old grind"` }, { text: `"You’ve been livin' off minimum wage for 15 years! Doesn’t that just break ya? Don’t you wanna do somethin' different? I bet you don’t even know what a supersized meal is!"` }, { text: `Admittedly, you haven't heard of a supersize meal. Peter sighs once more` }, { text: `"Hey, kid. I might be crossin' a line here, but I gotta say, I like your spunk. It takes some serious guts to think you can take down Miku. And, ya know, I guess I feel for ya, 'cause I kinda get where you're comin' from` }],
                                        options: [`Nah I'm good. Thanks tho!`, `Yes please!`],
                                        scenes: [{
                                            text: `Eh, suit yourself, kid. Your loss`,
                                            options: [`Continue`],
                                            scenes: [{
                                                path: ['p', 'p', 'p', 1, 0]
                                            }]
                                        }, {
                                            text: `Peter teaches you how to supersize a good burger meal. You now know how to supersize!`,
                                            options: [`Continue`],
                                            item: 'supersize',
                                            scenes: [{
                                                path: ['p', 'p', 'p', 1, 0]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        },
                        {
                            text: `"Could I have a good burger meal?"`,
                            image: `images/prison/4.jpg`,
                            cutscene: [{ text: `Shifu looks flabbergasted. He never even considered that you wouldn't try to save your world. Miku portals in and grabs Shifu`, image: `images/prison/1.jpg` }, { text: `"H-How? How did you know I was here?"`, image: `images/prison/2.jpg` }, { text: `"I was hiding in your wifi"`, image: `images/prison/2.jpg` }, { text: `Miku chucks Shifu through a portal and looks at you`, image: `images/prison/3.jpg` }],
                            options: [`Sure man. It's on the house`, `Nah`],
                            scenes: [{
                                text: `Miku says, “Mmm… Yeah this is mid af"`,
                                image: `images/prison/mid.jpg`,
                                options: [`Continue`],
                                scenes: [{ path: ['p', 1] }]
                            }, {
                                text: `Knowing that Miku is on her way, through the fortunately slow wifi, you join up with Earth's heroes, and warn them of Miku's destructive power.`, image: `images/prison/8.jpg`,
                                cutscene: [{ text: `Miku grabs you and throws you through a portal. "Lmao get jailed nerd," Miku jests. You are in a prison.`, image: `images/prison/5.jpg`}, { text: `You begin to form a plan, thinking of how in the world you would possibly escape the miku regime. Finally, you try to contact your world's heroes, because somehow, your phone works in this other dimension. Miku probably has full coverage of wifi, and spys on people through that`, image: `images/prison/6.jpg` }, { text: `The greatest of Earth's heroes show up, DanTDM, PewDiePie, Stampy, and Markiplier. Unfortunately for you, Miku knows that you accessed her wifi, and is on her way`, image: `images/prison/7.jpg` }],
                                options: [`Continue`],
                                scenes: [{
                                    text: `"Where do you think you're going?"`, image: `images/prison/12.jpg`,
                                    cutscene: [{ text: `On your way out, the door is closed, and a hooded man is guarding the door in which the heroes came through`, image: `images/prison/9.jpg` }, { text: `"You know, God gave me a gift to do other things besides play the game of basketball"`, image: `images/prison/10.jpg`}, { text: `Feeling this man's aura, you realize that he is the GOAT, LeBron James`, image: `images/prison/11.jpg`}],
                                    options: [`I'm gonna end Miku's reign once and for all! She needs to realize that this world is not hers!`, `Sorry, my GOAT, I did not know you were the guard here, I’ll go back…`],
                                    scenes: [{
                                        text: `"Of course I know you're here, kid, I've been hiding in your wifi, waiting for your attempt at retribution"`, image: `images/prison/destroy/5.jpg`,
                                        cutscene: [{ text: `"You seem like a baller, kid, and you're honest. I respect that. I'm gonna give you some advice that Warren Buffet once told me, he said, "always follow your gut. When you have that gut feeling, you have to go with it, don't go back on it"`, image: `images/prison/destroy/1.jpg` }, { text: `LeBron grabs you and your team, dunks you and your team through a portal to the top floor of the Miku scraper`, image: `images/prison/destroy/2.jpg` }, { text: `You land atop the Miku scraper, seeing the manaical vocaloid sitting atop a throne facing away from you, toward the now dystopian city, a city you once knew to be yours`, image: `images/prison/destroy/3.jpg` }, { text: `You say to your gang, "Maybe she doesn't know we're here."`}, { text: `As you say these words, World is Mine starts playing from all around you, and her throne spins 540 degrees (she accidentally 360'd, then finally turned it around correctly)`, image: `images/prison/destroy/4.jpg` }],
                                        options: [`Surrender`, `Fight Hatsune Miku`],
                                        scenes: [{
                                            text: `"You? You weaklings? What do you have to offer me, I could do just fine without you."\n\nWho responds?`,
                                            cutscene: [{ text: `Feeling her magical power, you feel completely oppressed. You say to your team, "We can't do this, nobody on this Earth is powerful enough"` }, { text: `The team looks at each other, nods amongst themselves, and approaches Miku. All thoughts of attempting to fight Miku have vanished, you've made peace with your life without Good Burger` }, { text: `"We would like to serve you, to become your personal strike team"` }],
                                            options: [`DanTDM`, `Markiplier`],
                                            scenes: [{
                                                text: `DanTDM replies, hoping that he will say the right thing, "Make me a sandwich, woman!" Miku is completely surprised that he would say such a thing. She looks you dead in the eyes. "Do you condone this?"`,
                                                options: [`Yep!`, `NAH`],
                                                scenes: [{
                                                    text: `Holding a leek, Miku casts a killing spell upon you, "AVADA KADAVRA", your group is completely obliterated \n\n YOU DIED`,
                                                    options: [`Go back`, `Restart from beginning`],
                                                    scenes: [{ path: [`p`, `p`] }, { path: [`P`] }]
                                                }, {
                                                    text: `"You decided to team up with him, you have to take responsiblity for who you choose to associate with!" \n\n"ONE TWO THREE MIKU MIKU BEAM" \n\nYou and your team are vanquished and not a molecule is left \n\n YOU DIED`,
                                                    options: [`Go back`, `Restart from beginning`],
                                                    scenes: [{ path: [`p`, `p`] }, { path: [`P`] }]
                                                }]
                                            }, {
                                                text: `"All I wanted to do, is follow you"\n\nYOU HAVE REACHED THE UNDERLING ENDING`,
                                                cutscene: [{ text: `Markiplier replies, knowing exactly what to say` }, { text: `"Hello everybody, my name is Markiplier"` }, { text: `The aura that came out of this statement was the most the world has ever seen, besides Satoru Gojo of course` }, { text: `Miku is taken aback, seeing this amount of aura truly impressed her. Because of this, she was moved` }, { text: `"Why, what a great offer, I can see why you chose this side of the war, you're the smart ones..."` }, { text: `Miku addresses you, "I'm on top of the world, because of you. You have untapped power, and I knew that if I didn't take this chance, I would not be able to make this world mine."` }, { text: `You thank Miku for this generous offer` }],
                                                options: [`Play again`],
                                                scenes: [{ path: [`P`] }]
                                            }]
                                        }, {
                                            text: `You go to attack Miku in a one on one, and she challenges you to a one versus one in a rhythm game. It all comes down to this, the world depends on you\n\nControl the rhythm game with the DFJK keys`,
                                            cutscene: [{ text: `PewDiePie unleashes his long range punch, dazing Miku, and Markiplier gets ready for an attack. DanTDM takes this opportunity, when shes dazed, to fly in and swing his diamond sword at Miku, slicing her leek wand in half` }, { text: `Stampy joins the fray, trying to charm Miku for you to do the final attack, this of course, doesn't work. Hatsune Miku came prepared, nobody can charm Miku the way Teto could...` }, { text: `Enraged by this, Miku attacks your team, leaving them all injured but you` }],
                                            options: ['Continue'],
                                            scenes: [{
                                                text: ``,
                                                options: [],
                                                scenes: [{
                                                    text: `Miku doesn't think twice before vaporizing you with her Miku Miku beam.\n\nYOU DIE`,
                                                    options: [`Retry game`, `Restart from beginning`],
                                                    scenes: [{ path: [`p`] }, { path: [`P`] }]
                                                }, {
                                                    text: `You won. The world can finally rest, the dictatorship by Miku is over. You don't have to worry about the world being hers, and you go back to Good Burger with your new friends\n\nYOU HAVE REACHED THE TEAMWORK ENDING`,
                                                    options: [`Play again`],
                                                    scenes: [{ path: [`P`] }]
                                                }],
                                                startGame: true
                                            }]
                                        }]
                                    }, {
                                        text: `You start walking back to your designated cell area, and while you're walking back, you think about what he was saying, and you begin to get confused. You think to yourself, why would he say that?`, image: `images/prison/walkback/2.jpg`,
                                        cutscene: [{ text: `LeBron says, "Yeah, sure ahaha, just make sure that you take care of your mattress covers." LeBron winks at you`, image: `images/prison/walkback/1.jpg`}],
                                        options: [`Go back to LeBron`, `Go back to your cell`],
                                        scenes: [{ path: ['p'] }, {
                                            text: `placeholder`,
                                            options: [],
                                            item: `drip`,
                                            scenes: [{
                                                text: `As you're trying to fall asleep, you're moving around on your mattress, and feel something underneath the mattress, which was preventing you from sleeping. You find a drippy looking coat\n\nYOU HAVE OBTAINED THE DRIP`, image: `images/prison/walkback/drip.jpg`,
                                                cutscene: [{ text: `You and the heroes return to the cell, and you try to go to sleep, feeling defeated`, image: `images/prison/walkback/3.jpg` }],
                                                options: [`Continue`],
                                                scenes: [{ path: ['p', 'p', `p`] }]
                                            }],
                                            lock: {
                                                paths: [{ path: [`p`] }], condition: () => true, scene: { path: [0] }
                                            }
                                        }]
                                    }]
                                }]
                            }, {
                                text: `You now work with miku at good burger, and have a great time doing it\n\nYOU REACHED THE SUPERSIZE ENDING\n\nOPEN SECRET`,
                                cutscene: [{ text: `Miku's face lights up with a childlike wonder. "S... Supersize?" she asks` }, { text: `"Dang right," you clarify` }, { text: `She eats her supersized meal as her heart grows three sizes` }, { text: `"Hey Miku. You can get loads of these burgers if you worked here"` }, { text: `She demands a job immediatly. You see no threat in her voice, and it seems she has forgotten about the rest of this world completely` }],
                                options: [`Go back`, `Restart from beginning`],
                                scenes: [{ path: [`p`] }, { path: [`P`] }]
                            }],
                            secret: { item: `supersize`, option: `Wanna Supersize that?` }
                        }
                    ]
                },
                {
                    text: `You arrive back in your world after your training, and are ready to take Miku down\n\n
                You now know skadoosh!`,
                    image: `images/oogway/3.jpg`,
                    cutscene: [{ text: `Oogway opens a portal to a peaceful world. “Now, it’s time you learnt skadoosh” Oogway says`, image: `images/oogway/1.jpg` }, { text: `He takes 40 days and 40 nights to teach you, but it’s okay since time does not pass in this dimension`, image: `images/oogway/2.jpg` }],
                    options: [`Continue`],
                    scenes: [{
                        text: `Oogway opens the wall like a doorway, and goes inside`,
                        image: `images/oogway/7.jpg`,
                        cutscene: [{ text: `You are in front of the miku home base, the miku-scraper. It appears like she's already started to take over your world. Your companion explains that miku has set up a field around the skyscraper to block any portals from opening inside`, image: `images/oogway/4.jpg` }, { text: `Oogway advises that you both enter from the basement, to avoid any real conflict. You agree with your mentor, and he creates a portal inside the sewers just outside the base's basement`, image: `images/oogway/5.jpg` }, { text: `You ask, "Wait, how do we get in?" Oogway explains that the entrance is a secret. An open secret. Anyone can find it`, image: `images/oogway/6.jpg` }],
                        options: [`Follow him`],
                        scenes: [{
                            text: `Inside the tower's basement you see:`,
                            image: `images/oogway/7.jpg`,
                            options: [`A box of goodies`, `A mall type of map (you are here type thing)`, `An elevator`, `A staircase`],
                            scenes: [{
                                text: `As you get closer to the box, a certain item catches your eye`,
                                image: `images/oogway/box.jpg`,
                                options: [`Inspect`],
                                scenes: [{
                                    text: `placeholder`,
                                    options: [],
                                    scenes: [{
                                        text: `You gain an odd looking key. There is a container of a viscous purple fluid at the top of the key\n\nOBTAINED ELIXER KEY`,
                                        image: `images/oogway/key.jpg`,
                                        options: [`Continue`],
                                        scenes: [{ path: [`p`, `p`, `p`] }]
                                    }],
                                    item: `elixir-key`,
                                    lock: {
                                        paths: [{ path: [`p`] }], condition: () => true, scene: { path: [0] }
                                    }
                                }]
                            }, {
                                text: `Oogway says this is an attempt at confusing any intruders, but he's seen many miku-scrapers in his day, so he'll guide you through this one easily. He points to the map and says it's best to take the elevator here`,
                                image: `images/oogway/map.jpg`,
                                cutscene: [{ text: `The map shows "you are here" in the basement. The map shows that the skyscraper is terribly unorganized, with a web diagram tangled over the whole thing showing many paths for portals`, image: `images/oogway/map.jpg` }],
                                options: [`Continue`],
                                scenes: [{ path: ['p'] }]
                            }, {
                                text: `You see a reception desk guarding an intimidating staircase. The person manning the desk is LeBron. "Do y'all have an appointment?"`,
                                image: `images/oogway/11.jpg`,
                                cutscene: [{ text: `You press the button and wait for the elevator to open. As it does, you see a few of miku's soldiers inside. They both recognize Oogway and turn to him`, image: `images/oogway/8.jpg` }, { text: `They immediatly ask for an autograph. Oogway chuckles and grants their wish. "You know, peace is always the best option to take, if the oppurtunity presents itself." You heed the words of your master and continue`, image: `images/oogway/9.jpg` }, { text: `The elevator leads straight up to the second highest floor before stopping. "This is as high as it will go. I mean it'll go higher if we had more authority, but this is pretty good all things considered."`, image: `images/oogway/10.jpg` }],
                                options: [`Yes, of course!`, `No. We are here to stop Miku`],
                                scenes: [{
                                    text: `As LeBron says this, he flies and crashes through the window. He holds you over the street, about 2,000 ft in the air. He drops you\n\nYOU DIE`,
                                    image: `images/oogway/lebronicide/3.jpg`,
                                    cutscene: [{ text: `LeBron eyes you disapprovingly. "Guys, I'm the goat. You really think I can't see through a simple little lie like that?"`, image: `images/oogway/lebronicide/1.jpg` }, { text: `Lebron grabs you Omni-man style. "And to think I thought you were worthy enough to stop Miku. I want to make this world a better place. And that starts by removing you from it"`, image: `images/oogway/lebronicide/2.jpg` }],
                                    options: [`Go back`, `Restart from beginning`],
                                    scenes: [{ path: [`p`] }, { path: [`P`] }]
                                }, {
                                    text: `"No matter. There's no way either of you could stop me now. I'm so deeply rooted in everyone's wifi that there's no point in even attempting to halt my expansion."`,
                                    image: `images/oogway/14.jpg`,
                                    cutscene: [{ text: `LeBron chuckles a little bit. "Yeah, I was getting tired of her reign too. Y'all are free to head on back there, do whatever you want lmao"`, image: `images/oogway/11.jpg` }, { text: `You both head up the staircase and see Miku, sitting with her back to you both as she looks at the skyline. She doesn't say anything`, image: `images/oogway/12.jpg` }, { text: `"She knows we're here. There's no point in hiding this"`, image: `images/oogway/12.jpg` }, { text: `Miku is startled, and looks back at the both of you. "Since when did you two get in here?? None of my alarms went off!"`, image: `images/oogway/13.jpg` }],
                                    options: [`Ask Oogway for help`, `Nuh uh!! (Attack)`],
                                    scenes: [{
                                        text: `Oogway knows you can take her in a fight, but decides against it. You are reminded of Oogway's words, and also decide that peace would be a better option. How do you attempt to convince her not to conquer this world?`,
                                        image: `images/oogway/peace/1.jpg`,
                                        options: [`Do a flip`, `Offer a game of slots`, `Talk Miku out of it`],
                                        scenes: [{
                                            text: `Miku lets out an obvious pog, but her decision is unwavering. She decides to take your life.\n\nYOU DIE`,
                                            image: `images/oogway/peace/flip.jpg`,
                                            options: [`Go back`, `Restart from beginning`],
                                            scenes: [{ path: [`p`] }, { path: [`P`] }]
                                        }, {
                                            text: `She decides to spare this world, because of this beautiful game. You end up gambling a bunch with Miku, and both end up as best friends by the end of it\n\nYOU REACHED THE GAMBLING ENDING`,
                                            image: `images/oogway/peace/4.jpg`,
                                            cutscene: [{ text: `You explain the concept of slots, and Miku is intrigued. The thought of making money easily has piqued her interest`, image: `images/oogway/peace/2.jpg` }, { text: `She demands you show her the way, and offers a vehicle. It's one of the cars from fortnite. You both make it to Vegas, and Miku is in awe of everything`, image: `images/oogway/peace/3.jpg` }],
                                            options: [`Play again`],
                                            scenes: [{ path: [`P`] }]
                                        }, {
                                            text: `You begin to imitate Steven Universe. "Miku... this isn't like you!" Miku, to be frank, is insulted that you would ever say such a thing and Miku Miku beams you on the spot.\n\nYOU DIE`,
                                            image: `images/oogway/peace/steven.jpg`,
                                            options: [`Go back`, `Restart from beginning`],
                                            scenes: [{ path: [`p`] }, { path: [`P`] }]
                                        }]
                                    }, {
                                        text: `Miku turns to Oogway and picks him up. She slams Oogway through the glass, and he tumbles helplessly to the ground. "You’re next, kid"\n\nRhythm game is played with the DFJK keys`,
                                        image: `images/oogway/fight/2.jpg`,
                                        cutscene: [{ text: `Miku parries your first attack expertly and throws you to the floor prone`, image: `images/oogway/fight/1.jpg` }, { text: `“You have no chance of stopping me now. Didn’t you hear anything I said?? Maybe this time you’ll learn”`, image: `images/oogway/fight/1.jpg` }],
                                        options: [`Yeah right!`],
                                        scenes: [{
                                            text: ``,
                                            options: [],
                                            image: `images/oogway/fight/3.jpg`,
                                            scenes: [{
                                                text: `"Didn't you listen? I've told you many times already that your resistance was futile. You're so pathetic. I wouldn't even keep you as a slave in my empire." Miku charges her classic Miku Miku Beam and executes you on the spot\n\nYOU DIE`,
                                                image: `images/oogway/fight/loss.jpg`,
                                                options: [`Restart Game`, `Restart from beginning`],
                                                scenes: [{ path: [`p`] }, { path: [`P`] }]
                                            }, {
                                                text: `Miku laughs "haha lmao jk" She starts counting down. 1... 2... 3... "Ready?" She has her Miku Miku Beam charged and ready.`,
                                                image: `images/oogway/fight/5.jpg`,
                                                cutscene: [{ text: `Miku coughs up blood from singing her heart out. "W-What?? H-How could YOU ever even BEGIN to think you could beat me? Is this really my final breath?"`, image: `images/oogway/fight/4.jpg` }],
                                                options: [`Skadoosh`],
                                                scenes: [{
                                                    text: `The tower is slowly converted to an apartment complex over the coming years, and everyone forgets what happened that day\n\nYOU REACHED THE SKADOOSH ENDING`,
                                                    image: `images/oogway/fight/8.jpg`,
                                                    cutscene: [{ text: `Skadoosh`, image: `images/oogway/fight/6.jpg` }, { text: `Miku gets skadooshed as a golden wave of light ripples down the tower. Miku is banished, and the entire tower knows. They all surrender to your might`, image: `images/oogway/fight/7.jpg` }],
                                                    options: [`Play again`],
                                                    scenes: [{ path: [`P`] }]
                                                }]
                                            }],
                                            startGame: true
                                        }]
                                    }]
                                }]
                            }, {
                                text: `You walk up the staircase with Master Oogway to see a group of high level intimidating guards on the ground floor`,
                                image: `images/oogway/drip-ending/1.jpg`,
                                options: [`Continue`],
                                secret: { item: `drip`, option: `Whip out the drip` },
                                scenes: [{
                                    text: `Without warning, they attack, giving no time for you to think\n\nYOU DIE`,
                                    image: `images/oogway/drip-ending/death.jpg`,
                                    options: [`Go back`, `Restart from beginning`],
                                    scenes: [{ path: [`p`, `p`] }, { path: [`P`] }]
                                }, {
                                    text: `"Hey, kid, why don’t you come work with us? Moments like this don’t come around too often, but when they do? Oh man, it’s the best time ever. I can’t believe I ever forgot about this stuff!"`,
                                    image: `images/oogway/drip-ending/5.jpg`,
                                    cutscene: [{ text: `You pull out the Miku drip and they are all taken aback. Peter Griffin looks you up and down, and says, "Heheh this is like that time we did the drip contest"`, image: `images/oogway/drip-ending/2.jpg` }, { text: `Suddenly, your vision cuts out and you see Miku standing in front of a group of people. As you look closer, you see that these people are actually those same guards, but they are all dripped out the wazoo. They seem to be having a contest for who's the drippiest. Miku, of course, wins this with her savage lil' drip coat`, image: `images/oogway/drip-ending/3.jpg` }, { text: `Your vision comes back, and all the guards are laughing remembering their good times. Peter walks over to you and puts a hand on your shoulder`, image: `images/oogway/drip-ending/4.jpg` }],
                                    options: [`Yeah I'll take the job`, `Nah I'm good. Thanks tho!`],
                                    scenes: [{
                                        text: `You can't believe you ever thought of taking these people down, and removing their culture from this planet. Also Oogway is executed for being a traitor\n\nYOU REACHED THE DRIP ENDING\nOPEN SECRET`,
                                        image: `images/oogway/drip-ending/7.jpg`,
                                        cutscene: [{ text: `"Good choice, kid!"`, image: `images/oogway/drip-ending/2.jpg` }, { text: `As one of Miku's guards, you go on to rank pretty high in the group`, image: `images/oogway/drip-ending/6.jpg` }, { text: `After a while, you get to the point where you get to host monthly drip contests. Miku judges all of these, of course, but you still have the honor of giving everyone the oppurtunity to express themselves and unwind`, image: `images/oogway/drip-ending/7.jpg` }],
                                        options: [`Play again`],
                                        scenes: [{ path: [`P`] }]
                                    }, {
                                        text: `Peter says, "No worries, kid. But hey, if you’re lookin’ to get to Miku, just head down and take the elevator. Simple as that!"`,
                                        image: `images/oogway/drip-ending/1.jpg`,
                                        options: [`Take the elevator`],
                                        scenes: [{ path: ['p', 'p', 'p', 2] }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
        },
        // the debug pathway
        { path: [3, 0, 1, 1] }
    ]
};

const test = {
    text: `You and john stare deeply into each others eyes. You don't want to ruin the moment, but you are afraid that if you stay silent for too long things may become slightly awkward. What do you do?`,
    options: [`Yell "HAIRPIN, RESONANCE!!"`, `Stay silent`, `Eat a lil food`],
    scenes: [{
        text: `John gets the refrence and chuckles a little, but is very confused. Stuffs a lil' awkward now :(\n-1 relationship point`,
        options: [`Continue`],
        blunder: { name: 'john', count: 1 },
        scenes: [{ path: ['p'] }],
        lock: {
            paths: [{ path: [] }, { path: ['P', 1] }, { path: ['P', 2] }], condition: () => (relationshipBlunders.john >= 3), scene: {
                path: ['P']
            }
        }
    }, {
        text: `John appreciates the silence, and bestows upon you the entirety of the country of France in gratitude`,
        options: [`Continue`],
        scenes: [{ path: ['p'] }]
    }, {
        text: `You try to eat food, but forget that you're at a UN conference instead of a dinner, and start gnawing on the table. John is disgusted by your disgraceful conduct\n-3 relationship points!!!`,
        blunder: { name: 'john', count: 3 },
        options: ['Continue'],
        scenes: [{ path: ['p'] }]
    }]
}

// prints text to screen and handles prompts
Object.prototype.run = function () {
    this.openSecrets();

    if (`function` in this) {
        this.function();
    }

    if (this.startGame) {
        startGameAll(this);
    }

    if (`cutscene` in this && !this.cutsceneRan && !(`lock` in this && this.lock.condition())) {
        this.cutscene[0].runScene(this, 0);
    } else {
        // document.getElementById(`text`).innerHTML = this.text;
        text.innerHTML = ``;
        typeWriterInput = this.text;
        m = 0;
        typeWriterVersion++; // Increment to cancel any ongoing typewriter
        typeWriter(typeWriterVersion);
        // Insert typewriter here hehe

        document.getElementById(`options`).innerHTML = ``;
        if ('options' in this) {
            for (option of this.options) {
                document.getElementById(`options`).innerHTML += `<li>${option}</li>`
            }
        }

        if ('image' in this) {
            document.getElementById(`image`).src = this.image;
        }

        if (this.item) {
            inventory[this.item] = true;
        }
        if (this.blunder) {
            relationshipBlunders[this.blunder.name] += this.blunder.count;
        }

        if (this.lock && this.lock.condition()) {
            for (target of this.lock.paths) {
                target.findPath().locked = true;
            }
            if ('path' in this.lock.scene) {
                this.lock.scene.findPath().run();
            } else {
                this.lock.scene.run();
            }
        } else {
            let object = this;

            document.addEventListener(`keydown`, function select(e) {
                if (parseInt(e.key) > 0 && parseInt(e.key) <= object.options.length && !gameActive) {
                    if (!object.scenes[parseInt(e.key) - 1].locked) {

                        if (object.cutsceneRan) {
                            delete object.cutsceneRan;
                        }

                        if (!('scenes' in object.scenes[parseInt(e.key) - 1]) && !object.scenes[parseInt(e.key) - 1].ending) {
                            object.scenes[parseInt(e.key) - 1].findPath().run();
                        } else {
                            object.scenes[parseInt(e.key) - 1].run();
                        }
                        this.removeEventListener(`keydown`, arguments.callee);
                    }
                    if ('locked' in object.scenes[parseInt(e.key) - 1] && object.scenes[parseInt(e.key) - 1].locked && !text.innerHTML.includes(`That path is locked!`)) {
                        document.getElementById(`text`).innerHTML = `That path is locked!<br><br>` + document.getElementById(`text`).innerHTML;
                    }
                }
            })
        }
    }
}

Object.prototype.runScene = function (parent, i) {
    text.innerHTML = ``;
    typeWriterInput = this.text;
    m = 0;
    typeWriterVersion++; // Increment to cancel any ongoing typewriter
    typeWriter(typeWriterVersion);
    //put typewriter in here hehe

    if (`image` in this) {
        image.src = this.image;
    }
    options.innerHTML = `<li>Continue</li>`;

    let scene = this;

    document.addEventListener(`keydown`, function select(e) {
        if (e.key == 1) {
            document.removeEventListener(`keydown`, select);
            options.children[0].addEventListener(`click`, select);
            if (i + 1 === parent.cutscene.length) {
                parent.cutsceneRan = true;
                parent.run();
            } else {
                i++;
                parent.cutscene[i].runScene(parent, i);
            }
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
    if ('lock' in this) {
        for (path of this.lock.paths) {
            path.parent = this;
        }
        this.lock.scene.parent = this;
    }
}

// useful for going up or down the line multiple times
// returns the object the path leads to
// paths look like [`p`] for parent, or [0] for zero index
// so a path like [`p`, 0] will return the parent's first scene
Object.prototype.findPath = function () {
    function followPath(object, path) {
        if (path[0] === `P`) {
            path.shift();
            return followPath(story, path);
        } else if (path[0] === `p`) {
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
        if (inventory[this.secret.item] && !this.options.includes(this.secret.option)) {
            this.options.push(this.secret.option);
        }
    }
}

// keeps inventory through page exit
window.addEventListener(`beforeunload`, () => {
    let processingInventory = { ...inventory }
    for (person of Object.keys(relationshipBlunders)) {
        delete processingInventory[person];
    }
    localStorage.setItem("inventory", JSON.stringify(processingInventory));
})

function typeWriter(localVersion) {
    if (m < typeWriterInput.length && localVersion === typeWriterVersion) {
        if (typeWriterInput.charAt(m) === `\n`) {
            document.getElementById("text").innerHTML += `<br>`
        } else {
            document.getElementById("text").innerHTML += typeWriterInput.charAt(m);
        }
        m++;
        setTimeout(() => { typeWriter(localVersion) }, typeSpeed);
    }
}

story.addParents();
// story.run();

// Debug Path
story.scenes[4].findPath().run();