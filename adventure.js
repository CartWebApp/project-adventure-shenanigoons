const text = document.getElementById(`text`);
const options = document.getElementById(`options`);
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

const relationshipBlunders = {
    teto: 0,
    gabriel: 0,
    walter: 0,
    iceBear: 0,
    john: 0
}

const story = {
    text: `Miku steps forward, crossing into your world`,
    cutscene: [{ text: `The night shift at Good Burger was supposed to be uneventful. The parking lot was empty, the distant hum of traffic the only sound as you hauled a garbage bag toward the dumpster. Then, the air changed.`, image: `images/first-cutscene/1.jpg` }, { text: `A deep hum vibrated through the lot, and with a sudden crack, a portal tore open above the dumpster, swirling with neon blue energy. Inside, two figures clashed—Master Oogway, standing firm, and Hatsune Miku, a streak of turquoise light moving with impossible speed.`, image: `images/first-cutscene/2.jpg` }, { text: `“You do not belong here,” Oogway said, deflecting a strike with his staff.`, image: `images/first-cutscene/3.jpg` }, { text: `Miku’s teal eyes gleamed. “And you do?”`, image: `images/first-cutscene/4.jpg` }, { text: `She unleashed a wave of energy, sharp crescents of sound cutting through the air. Oogway spun his staff, dispersing them, but she was already gone—a blur that reappeared above him. Her foot crashed into his shell, a burst of cyan energy erupting on impact.`, image: `images/first-cutscene/5.jpg` }, { text: `With a resounding crash, Oogway was blasted from the portal, spinning through the air before slamming into the Good Burger dumpster.`, image: `images/first-cutscene/6.jpg` }, { text: `You froze, gripping the garbage bag like it was your last defense. The portal still crackled with energy. On the other side, Miku’s gaze shifted from the fallen Oogway… to you.`, image: `images/first-cutscene/7.jpg` }, { text: `From inside the dumpster, Oogway’s muffled voice weakly urged, “Go… after her…”`, image: `images/first-cutscene/8.jpg`, last: true }],
    options: [`Stay paralyzed, stunned with fear`, `Go after her`, `“What is going on!?”`],
    image: `images/first-cutscene/9.jpg`,
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
                    {
                        text: `You are in front of the miku home base (the miku-scraper). It appears like she's already started to take over your world. Your companion explains that miku has set up a field around the skyscraper to block any portals from opening inside`,
                        options: [`Continue`],
                        scenes: [{
                            text: `Shifu knows that Miku is too powerful to take on alone. He knows of a few high level guards inside the building, and thinks you both would be able to convince that group to join you both and lay siege on Miku. You don't share his optimism, but you let him lead the way. You both walk in the front door of the miku-scraper to see a group of guards having a potluck on the ground floor. They recognize Shifu, and clamor around him, greeting him, dapping him up and the like. Shifu talks about your plans to stop Miku's takeover, and the clamoring stops. "Now that just ain't gonna happen" Peter Griffin interjects.`,
                            options: [`Oh ok I'll just do it myself then`, `Think of the lives at stake!`, `It'd be funny`],
                            scenes: [{
                                text: `"You insult me, kid. LeBron, do your thing" As Peter says this, LeBron flies over to you from a corner in the room. He picks you up and flies you to the top of the skyscraper. "G'bye kid. This is just part of the job description" He drops you. YOU DIE`,
                                options: [`Go back`, `Restart from beginning`],
                                scenes: [{ path: [`p`] }, { path: [`P`] }]
                            }, {
                                text: `As you say this, your vision cuts. You see a broken world, where people are both scared to die and be alive. There are posters of Miku's face everywhere. Upon closer inspection, the posters seem to have a surveillance system built into them. Everyone in this world is terrified. Your vision cuts back, and you look around. Everyone seems to have had the same vision as you. "You have to warn us before you use a cutaway gag" Shifu scolds. "I've told you before," Peter Griffin explains, "I can't control them. But this was quite enlightening."`,
                                options: [`Continue`],
                                scenes: [{
                                    text: `Peter says, "I'll set up a vote in the guards' high council regarding a siege on Miku. You have my vote, of course, but you'll have to convince the others." You see him step over to a corner where many guards are. Most guards seem taken aback by this proposition. You see four high ranking guards besides Peter in that corner, all of them eyeing you both. You'll only need to convince two of them to get a majority vote.<br><br>If you lose 3 relationship points that person’s vote is locked out and cannot be accessed again.`,
                                    options: [`Continue`],
                                    scenes: [{
                                        text: `Who do you approach?`,
                                        options: [`A man with sunglasses and a hat`, `Twintailed drilly haired redhead`, `A polar bear`, `A curly haired man`],
                                        scenes: [
                                            {
                                                text: `You approach Walter White, and he eyes you catiously`,
                                                options: [`We have to cook`, `Think of Walter White Jr.`],
                                                scenes: [{
                                                    text: `With what lab? Miku stole my RV once I joined her army<br><br>-1 relationship point!`,
                                                    options: [`Continue`],
                                                    scenes: [{ path: [`p`] }, {
                                                        text: `With what lab? Miku stole my RV once I joined her army<br><br>You know what, I'm tired of this. I'm voting against the rebellion"<br><br>You lost Walter's vote!`,
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
                                                        text: `Walter is taken aback by this. "Who do you think you are?? To ask me for help, and insult ME in YOUR time of need? You're on thin ice, pal"<br><br>-2 relationship points!!`,
                                                        options: [`Focus up Walter`],
                                                        scenes: [{ path: [`p`] }, {
                                                            text: `Walter is taken aback by this. "Who do you think you are?? To ask me for help, and insult ME in YOUR time of need? I'm done with you. I'm voting against the rebellion<br><br>You lost Walter's vote!`,
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
                                                                text: `You see Walter's face light up with a childlike wonder "I haven't heard those words in 14 years. Alright kid, you have my vote."<br><br>YOU HAVE WALTER'S VOTE!`,
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
                                                    text: `We have to cook! I know exactly where to use this. Come on, Pinkman. You find a remote village, and in this village you see a Barbaric King and an Archer Queen. Walter explains, “We need to cook". The monarchs lead you to a cave, showing you a massive vat of Dark Elixir. Not asking any questions, you fill a vial with this dark elixir, and you head back to Good Burger, with your new secret ingredient. YOU HAVE RETURNED WITH THE ELIXIR OPEN SECRET`,
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
                                                        text: `heheh it's the thing lmao. aight you have my vote kid that was pretty good<br><br>YOU HAVE TETO'S VOTE!`,
                                                        options: [`Continue`], 
                                                        scenes: [{ path: [`p`, `p`, `p`] }],
                                                    }],
                                                    item: 'teto',
                                                    lock: {
                                                        paths: [{ path: [`p`] }], condition: () => true, scene: { path: [0] }
                                                    }
                                                }, {
                                                    text: `No, idiot. I like baguettes but I'm not frickin' Scooby Doo. And even if I was, you don't even have one.<br><br>-2 relationship point!!`,
                                                    options: [`Start singing Teto Territory`, `But you would like to stop Miku, right?`],
                                                    scenes: [{ path: [`p`, 0] }, { path: [`p`, 2] }, {
                                                        text: `No, idiot. I like baguettes but I'm not frickin' Scooby Doo. Y'know what that pissed me off you just lost my vote nerd<br><br>YOU LOST TETO'S VOTE!`,
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
                                                            text: `That makes sense, but I'm not sure if the others will agree. Okay kid, you have my vote. IF the others are willing to go along with you too<br><br>YOU HAVE TETO'S VOTE!`,
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
                                                            text: `You faceplant HARD. "You kinda suck at this y'know"<br><br>-1 relationship point!`,
                                                            options: [`*change subject* You wanted to overthrow Miku, right?`],
                                                            scenes: [{ path: [`p`, `p`] }, {
                                                                text: `You faceplant HARD. "...yeah you just lost my vote kid"<br><br>YOU LOST TETO'S VOTE!`,
                                                                options: [`Continue`],
                                                                scenes: [{ path: [`p`, `p`, `p`, `p`, `p`] }]
                                                            }],
                                                            blunder: { name: `teto`, count: 1 },
                                                            lock: {
                                                                paths: [{ path: [`p`, `p`, `p`] }], condition: () => relationshipBlunders.teto >= 3, scene: { path: [1] }
                                                            }
                                                        }, {
                                                            text: `dude c'mon i wanted to see smth cool<br><br>-1 relationship point!`,
                                                            options: [`yeah sry lol. You wanted to overthrow Miku, right?`],
                                                            scenes: [{ path: [`p`, `p`] }, {
                                                                text: `...screw you dude<br><br>YOU JUST LOST TETO'S VOTE!`,
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
                                                                text: `You start shaking about ferally and frothing at the mouth. "lmao your just like me fr. Dude you're kinda hittin' that! You just earned my vote"<br><br>YOU HAVE TETO'S VOTE!`,
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
                                                    text: `Don't mock ice bear<br><br>-1 relationship point!`,
                                                    options: [`Continue`],
                                                    scenes: [{ path: [`p`] }, {
                                                        text: `Don't mock ice bear<br><br>YOU JUST LOST ICE BEAR'S VOTE!`,
                                                        options: [`Continue`],
                                                        scenes: [{ path: [`p`, `p`, `p`] }]
                                                    }],
                                                    blunder: { name: `iceBear`, count: 1 },
                                                    lock: {
                                                        paths: [{ path: [`p`] }], condition: () => relationshipBlunders.iceBear >= 3, scene: [1]
                                                    }
                                                }]
                                            }]
                                    }]
                                }]
                            }, {
                                text: `It's not funny to lose my job, kid. You know what it's like, don't you? Being stuck in a job you hate? I have access to your file. I know you've been working at that good burger for over 15 years. You don't like your job, just like me, but it's what we must do to survive.`,
                                options: [`I am NOTHING like you`, `wait but i love good burger`],
                                scenes: [{ path: ['p', 0] }, {
                                    text: `Peter sighs. "I don't understand you. You've been working at that job for over half your life, without promotion or change of any kind. You've lived off of minimum wage for 15 full years! Doesn't that wear you down! Doesn't that make you wanna change! I bet you haven't even heard of a supersized meal." Admittedly, you haven't heard of a supersize meal. Peter sighs once more. "Hey kid. I may be overstepping my boundaries, but I like your spunk. It takes real guts to even think you can take Miku down. And I guess I feel sympathetic because I relate to you. Lemme teach you how to supersize a meal"`,
                                    options: [`Nah I'm good. Thanks tho!`, `Yes please!`],
                                    scenes: [{
                                        text: `Suit yourself, kid`,
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
                        text: `Shifu looks flabbergasted. He never even considered that you wouldn't try to save your world. Miku portals in and grabs Shifu. Shifu: "H-How? How did you know I was here?". Miku: "I was hiding in your wifi". Miku chucks Shifu through a portal and looks at you. Miku: "Could I have a good burger meal?"`,
                        options: [`Sure man. It's on the house`, `Nah`],
                        scenes: [{
                            text: `Miku says, “Mmm… Yeah this is mid af"`,
                            options: [`Continue`],
                            scenes: [{ path: ['p', 1] }]
                        }, {
                            text: `Miku grabs you and throws you through a portal. "Lmao get jailed nerd", Miku says, "It's a shame, really. Maybe this will teach you a lesson." You are in a prison.
                            You begin to form a plan, thinking of how in the world you would possibly escape the miku regime. Finally, you try to contact your world's heroes, because somehow, your phone works in this other dimension, you begin to question if its because miku is hiding in everyone's wifi, thus providing wifi for everyone.  
                            The greatest of Earth's heroes show up, DanTDM, PewDiePie, Stampy, and Markiplier. Unfortunately for you, Miku knows that you accessed her wifi, and is on her way.  
                            Knowing that Miku is on her way, through the fortunately slow wifi, you join up with Earth's heroes, and warn them of Miku's destructive power.`,
                            options: [`Continue`],
                            scenes: [{
                                text: `On your way out, the door is closed, and a hooded man is guarding the door in which the heroes came through. He says, "You know, God gave me a gift to do other things besides play the game of basketball." Feeling this man's aura, you realize that he is the GOAT, he is LeBron James. He asks you, "where do you think you're going?"`,
                                options: [`I'm gonna end Miku's reign once and for all! She needs to realize that this world is not hers!`, `Sorry, my GOAT, I did not know you were the guard here, I’ll go back…`],
                                scenes: [{
                                    text: `You seem like a baller, kid, and you're honest. I respect that. I'm gonna give you some advice that Warren Buffet once told me, he said, "always follow your gut. When you have that gut feeling, you have to go with it, don't go back on it.  
                                    (LeBron grabs you and your team, dunks you and your team through a portal to the top floor of the Miku scraper). 
                                    You land atop the Miku scraper, seeing the manaical vocaloid sitting atop a throne facing away from you, toward the now dystopian city, a city you once knew to be yours. You say to your gang, "Maybe she doesn't know we're here." As you say these words, World is Mine starts playing from all around you, and her throne spins 540 degrees (she accidentally 360'd, then finally turned it around correctly) "Of course I know you're here, kid, I've been hiding in your wifi, waiting for your attempt at retribution."`,
                                    options: [`Surrender`, `Fight Hatsune Miku`],
                                    scenes: [{
                                        text: `Feeling her magical power, you feel completely oppressed, you say to your team, "we can't do this, nobody on this Earth is powerful enough." The team looks at each other and nods amongst themselves, and approach Miku. All thoughts of attempting to fight Miku have vanished, you've made peace with your life without Good Burger."We would like to serve you, to become your personal strike team" You? You weaklings? What do you have to offer me, I could do just fine without you. Who responds?`,
                                        options: [`DanTDM`, `Markiplier`],
                                        scenes: [{
                                            text: `DanTDM replies, hoping that he will say the right thing, "Make me a sandwich, woman!" Miku is completely surprised that he would say such a thing. She looks you dead in the eyes. "Do you condone this?"`,
                                            options: [`Yep!`, `NAH`],
                                            scenes: [{
                                                text: `Holding a leek, Miku casts a killing spell upon you, "AVADA KADAVRA", your group is completely obliterated YOU DIED`,
                                                options: [`Go back`, `Restart from beginning`],
                                                scenes: [{ path: [`p`, `p`] }, { path: [`P`] }]
                                            }, {
                                                text: `"You decided to team up with him, you have to take responsiblity for who you choose to associate with!" "ONE TWO THREE MIKU MIKU BEAM" You and your team are vanquished and not a molecule is left YOU DIED`,
                                                options: [`Go back`, `Restart from beginning`],
                                                scenes: [{ path: [`p`, `p`] }, { path: [`P`] }]
                                            }]
                                        }, {
                                            text: `Markiplier replies, knowing exactly what to say, "Hello everybody, my name is Markiplier". The aura that came out of this statement was the most the world has ever seen, besides Satoru Gojo of course. Miku is taken aback, seeing this amount of aura truly impressed her. Because of this, she was moved. "Why, what a great offer, I can see why you chose this side of the war, you're the smart ones..." Miku addresses you, "I'm on top of the world, because of you." "You have untapped power, and I knew that if I didn't take this chance, I would not be able to make this world mine."  You thank Miku for this generous offer, and tell her, "All I wanted to do, is follow you" YOU HAVE REACHED THE UNDERLING ENDING`,
                                            options: [`Play again`],
                                            scenes: [{ path: [`P`] }]
                                        }]
                                    }, {
                                        text: `PewDiePie unleashes his long range punch, dazing Miku, and Markiplier gets ready for an attack. DanTDM takes this opportunity, when shes dazed, to fly in and swing his diamond sword at Miku, slicing her leek wand in half. Stampy joins the fray, trying to charm Miku for you to do the final attack, this of course, doesn't work. Hatsune Miku came prepared, nobody can charm Miku the way Teto could... Enraged by this, Mikuattacks your team, leaving them all injured but you. You go to attack Miku in a one on one, and she challenges you to a one versus one in a rhythm game. It all comes down to this, the world depends on you.`,
                                        options: ['Continue'],
                                        scenes: [{
                                            // Rhythm game
                                        }]
                                    }]
                                }, {
                                    text: `LeBron says, "Yeah, sure ahaha, just make sure that you take care of your mattress covers (winks)"
                                    You start walking back to your designated cell area, and while you're walking back, you think about what he was saying, and you begin to get confused. You think to yourself, why would he say that?`,
                                    options: [`Go back to LeBron`, `Go back to your cell`],
                                    scenes: [{ path: ['p'] }, {
                                        text: `You and the heroes return to the cell, and you try to go to sleep, feeling defeated. 
                                        As you're trying to fall asleep, you're moving around on your mattress, and feel something underneath the mattress, which was preventing you from sleeping. You find a drippy looking coat<br><br>YOU HAVE OBTAINED THE DRIP`,
                                        options: [`Continue`],
                                        item: `drip`,
                                        scenes: [{ path: ['p', 'p'] }]
                                    }]
                                }]
                            }]
                        }, {
                            text: `Miku's face lights up with a childlike wonder. "S... Supersize?" she asks. "Dang right" You clarify. She eats her supersized meal as her heart grows three sizes. "Hey kid. You can get loads of these burgers if you worked here." She demands a job immediatly. You see no threat in her voice, and it seems she has forgotten about the rest of this world completely. You now work with miku at good burger, and have a great time doing it. <br><br>YOU REACHED THE GOOD BURGER ENDING <br><br>OPEN SECRET`,
                            options: [`Go back`, `Restart from beginning`],
                            scenes: [{ path: [`p`] }, { path: [`P`] }]
                        }],
                        secret: { item: `supersize`, option: `Wanna Supersize that?` }
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
                            item: `elixir-key`
                        }, {
                            text: `The map shows "you are here" in the basement. The map shows that the skyscraper is terribly unorganized, with a web diagram tangled over the whole thing showing many paths for portals. Oogway says this is an attempt at confusing any intruders, but he's seen many miku-scrapers in his day, so he'll guide you through this one easily. He points to the map and says it's best to take the elevator here`,
                            options: [`Continue`],
                            scenes: [{ path: ['p'] }]
                        }, {
                            text: `You press the button and wait for the elevator to open. As it does, you see a few of miku's soldiers inside. They both recognize Oogway and turn to him. They immediatly ask for an autograph. Oogway chuckles and grants their wish. "You know, peace is always the best option to take, if the oppurtunity presents itself." You heed the words of your master and continue. The elevator leads straight up to the second highest floor before stopping. "This is as high as it will go. I mean it'll go higher if we had more authority, but this is pretty good all things considered." You see a reception desk guarding an intimidating staircase. The person manning the desk is LeBron. "Do y'all have an appointment?"`,
                            options: [`Yes, of course!`, `No. We are here to stop Miku`],
                            scenes: [{
                                text: `LeBron eyes you disapprovingly. "Guys, I'm the goat. You really think I can't see through a simple little lie like that?" Lebron grabs you Omni-man style. "And to think I thought you were worthy enough to stop Miku. I want to make this world a better place. And that starts by removing you from it" As LeBron says this, he flies and crashes through the window. He holds you over the street, about 2,000 ft in the air. He drops you (if you've been dropped in another ending he says "heh. feels like we've done this before, huh?").<br><br>YOU DIE`,
                                options: [`Go back`, `Restart from beginning`],
                                scenes: [{ path: [`p`] }, { path: [`P`] }]
                            }, {
                                text: `LeBron chuckles a little bit. "Yeah, I was getting tired of her reign too. Y'all are free to head on back there, do whatever you want lmao" You both head up the staircase and see Miku, sitting with her back to you both as she looks at the skyline. She doesn't say anything. Oogway: "She knows we're here. There's no point in hiding this." Miku is startled, and looks back at the both of you. "Since when did you two get in here?? None of my alarms went off! No matter. There's no way either of you could stop me now. I'm so deeply rooted in everyone's wifi that there's no point in even attempting to halt my expansion."`,
                                options: [`Ask Oogway for help`, `Nuh uh!! (Attack)`],
                                scenes: [{
                                    text: `Oogway knows you can take her in a fight, but decides against it. You are reminded of Oogway's words, and also decide that peace would be a better option. How do you attempt to convince her not to conquer this world?`,
                                    options: [`Do a flip`, `Offer a game of slots`, `Talk Miku out of it`],
                                    scenes: [{
                                        text: `Miku lets out an obvious pog, but her decision is unwavering. She decides to take your life.<br><br>YOU DIE`,
                                        options: [`Go back`, `Restart from beginning`],
                                        scenes: [{ path: [`p`] }, { path: [`P`] }]
                                    }, {
                                        text: `You explain the concept of slots, and Miku is intrigued. The thought of making money easily has piqued her interest. She demands you show her the way, and offers a vehicle. It's one of the cars from fortnite. You both make it to Vegas, and Miku is in awe of everything. She decides to spare this world, because of this beautiful game. You end up gambling a bunch with Miku, and both end up as best friends by the end of it.<br><br>YOU REACHED THE GAMBLING ENDING`,
                                        options: [`Play again`],
                                        scenes: [{ path: [`P`] }]
                                    }, {
                                        text: `You begin to imitate Steven Universe. "Miku... this isn't like you!" Miku, to be frank, is insulted that you would ever say such a thing and Miku Miku beams you on the spot.<br><br>YOU DIE`,
                                        options: [`Go back`, `Restart from beginning`],
                                        scenes: [{ path: [`p`] }, { path: [`P`] }]
                                    }]
                                }, {
                                    // rhythm game
                                }]
                            }]
                        }, {
                            text: `You walk up the staircase with Master Oogway to see a group of high level intimidating guards on the ground floor`,
                            options: [`Continue`],
                            secret: { item: `drip`, option: `Whip out the drip` },
                            scenes: [{
                                text: `Without warning, they attack, giving no time for you to think. This must have been why Oogway said to avoid this floor. You have learned your lesson.<br><br>YOU DIE`,
                                options: [`Go back`, `Restart from beginning`],
                                scenes: [{ path: [`p`] }, { path: [`P`] }]
                            }, {
                                text: `You pull out the Miku drip and they are all taken aback. Peter Griffin looks you up and down, and says, "Heheh this is like that time we did the drip contest." Suddenly, your vision cuts out and you see Miku standing in front of a group of people. As you look closer, you see that these people are actually those same guards, but they are all dripped out the wazoo. They seem to be having a contest for who's the drippiest. Miku, of course, wins this with her savage lil' drip coat. Your vision comes back, and all the guards are laughing remembering their good times. Peter walks over to you and puts a hand on your shoulder. "Hey kid, why don't you work with us? Times like this don't happen often, but when they do, it's the best time ever. I can't believe I ever forgot about this."`,
                                options: [`Yeah I'll take the job`, `Nah I'm good. Thanks tho!`],
                                scenes: [{
                                    text: `"Good choice, kid!" As one of Miku's guards, you go on to rank pretty high in the group. After a while, you get to the point where you get to host monthly drip contests. Miku judges all of these, of course, but you still have the honor of giving everyone the oppurtunity to express themselves and unwind. You can't believe you ever thought of taking these people down, and removing their culture from this planet. Also Oogway is executed for being a traitor<br><br>YOU REACHED THE DRIP ENDING<br>OPEN SECRET`,
                                    options: [`Play again`],
                                    scenes: [{ path: [`P`] }]
                                }, {
                                    text: `Peter says, "No worries kid.  But if you're trying to get to Miku, go down and take the elevator."`,
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
        { path: [3, 0, 0, 0, 1, 0, 0] }
    ]
};

const test = {
    text: `You and john stare deeply into each others eyes. You don't want to ruin the moment, but you are afraid that if you stay silent for too long things may become slightly awkward. What do you do?`,
    options: [`Yell "HAIRPIN, RESONANCE!!"`, `Stay silent`, `Eat a lil food`],
    scenes: [{
        text: `John gets the refrence and chuckles a little, but is very confused. Stuffs a lil' awkward now :(<br>-1 relationship point`,
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
        text: `You try to eat food, but forget that you're at a UN conference instead of a dinner, and start gnawing on the table. John is disgusted by your disgraceful conduct<br>-3 relationship points!!!`,
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

    if (`cutscene` in this && !this.cutsceneRan) {
        this.cutscene[0].runScene(this, 0);
    } else {
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

            for (let i = 0; i < this.options.length; i++) {
                options.children[i].addEventListener(`click`, function select() {
                    if (!object.scenes[i].locked) {
                        document.removeEventListener(`keydown`, select);
                        if (object.cutsceneRan) {
                            delete object.cutsceneRan;
                        }

                        if (!('scenes' in object.scenes[i]) && !object.scenes[i].ending) {
                            object.scenes[i].findPath().run();
                        } else {
                            object.scenes[i].run();
                        }
                    }
                    if ('locked' in object.scenes[i] && object.scenes[i].locked && !text.innerHTML.includes(`<br><br>That path is locked!`)) {
                        text.innerHTML += `<br><br>That path is locked!`;
                    }
                })
            }
            document.addEventListener(`keydown`, function select(e) {
                if (parseInt(e.key) > 0 && parseInt(e.key) <= object.options.length) {
                    if (!object.scenes[parseInt(e.key) - 1].locked) {
                        document.removeEventListener(`keydown`, select);

                        if (object.cutsceneRan) {
                            delete object.cutsceneRan;
                        }

                        if (!('scenes' in object.scenes[parseInt(e.key) - 1]) && !object.scenes[parseInt(e.key) - 1].ending) {
                            object.scenes[parseInt(e.key) - 1].findPath().run();
                        } else {
                            object.scenes[parseInt(e.key) - 1].run();
                        }
                    }
                    if ('locked' in object.scenes[parseInt(e.key) - 1] && object.scenes[parseInt(e.key) - 1].locked && !text.innerHTML.includes(`<br><br>That path is locked!`)) {
                        text.innerHTML += `<br><br>That path is locked!`;
                    }
                }
            })
        }
    }
}

Object.prototype.runScene = function (parent, i) {

    text.innerHTML = this.text;
    if (`image` in this) {
        image.src = this.image;
    }

    options.innerHTML = `<li>Continue</li>`;

    let scene = this;
    options.children[0].addEventListener(`click`, function select() {
        document.removeEventListener(`keydown`, select);
        options.children[0].addEventListener(`click`, select);
        if (scene.last) {
            parent.cutsceneRan = true;
            parent.run();
        } else {
            i++;
            parent.cutscene[i].runScene(parent, i);
        }
    })

    document.addEventListener(`keydown`, function select(e) {
        if (e.key == 1) {
            document.removeEventListener(`keydown`, select);
            options.children[0].addEventListener(`click`, select);
            if (scene.last) {
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
        if (inventory[this.secret.item]) {
            this.options.push(this.secret.option);
        }
    }
}

story.addParents();
// story.run();

// Debug Path
story.scenes[4].findPath().run();