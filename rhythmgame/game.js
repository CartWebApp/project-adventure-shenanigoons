let myGamePiece, myGamePiece2, myGamePiece3, myGamePiece4;
let theLine;
let myObstacles = [];
let myScore;
let myBody = document.querySelector(`body`);
let scoreCounter = missCounter = jfkdead = jfk = maxCombo =  nextNoteIndex = 0;
let touchPressed1, touchPressed2, touchPressed3, touchPressed4;
let keyJustTouched1, keyJustTouched2, keyJustTouched3, keyJustTouched4;
let comboDisplay;

let touchMade = 0;

let touch1, touch2, touch3, touch4;
let sillyCanvas;
let gameHolder = document.getElementById(`gameHolder`);
let statHolder = document.getElementById(`statHolder`);
let overlayHolder = document.getElementById(`overlayHolder`);
let theBtn = document.getElementById(`startBtn`);
let theBody = document.querySelector(`body`);
let touchIndex = 0;
// let laneList;
// let canvWidth = 270;
let canvWidth = 400;
let canvHeight = canvWidth * (16 / 9);
// let canvHeight = 480;
let keyPressed, keyPressed2, keyPressed3, keyPressed4 = false;
let keyJustPressed, keyJustPressed2, keyJustPressed3, keyJustPressed4 = false
const music = document.getElementById("bgMusic");
// const spawnLanes = [0, 68, 136, 204]; // approx. evenly spaced
let lane0 = 1;
let lane1 = (canvWidth * (1.01 / 4));
let lane2 = ((canvWidth * 2.015 / 4));
let lane3 = (canvWidth * (3.02 / 4));
const spawnLanes = [lane0, lane1, lane2, lane3];
let gameStartTime = null;
let redWidth = canvWidth * (.9851 / 4);
let redHeight = canvHeight * .83333;
// variable to communicate with adventure.js
let gameActive = false;
let scene;
let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = canvWidth;
        this.canvas.height = canvHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        requestAnimationFrame(updateGameArea);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};
let timings = [];
function resetter() {
    scoreCounter = missCounter = jfkdead = jfk = maxCombo = nextNoteIndex = missCounter = scoreCounter = maxCombo = 0;
    gameStartTime = lastFrameTime = null;
    gameActive = false;
    p = 2;
    combo = 1;
    timings = [];
    theBody.classList.remove(`BLINDING`);
    touch1.classList.remove(`ALIVE`);
    touch2.classList.remove(`ALIVE`);
    touch3.classList.remove(`ALIVE`);
    touch4.classList.remove(`ALIVE`);
    rhythmRemoveEventListeners();
}
function startGameAll(thisScene) {
    overlayHolder.classList.add(`ALIVE`);
    for (let i = 0; i < laneList.length; i++) {
        const obstacle = laneList[i];
        p = Number(obstacle[1]) + p;
        timings.push(p)
    }
    gameActive = true;
    scene = thisScene;
    setTimeout(() => {
        theBody.classList.add(`BLINDING`);
    }, 1600);
    gameHolder.classList.add(`hidden`);
    setTimeout(() => {
        gameHolder.classList.add(`theRemoving`);
        document.getElementById(`startBtn`).classList.add(`ALIVE`);
    }, 2250);
}

function createTouchOverlay(width, height, color) {
    const div = document.createElement("div");
    
    // div.style.position = "absolute";
    // div.style.left = x + "px";
    // div.style.bottom = "0px";
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.backgroundColor = `transparent`; // make visible for debugging if needed
    div.style.zIndex = 99999;
    div.id = `touchDiv${touchIndex}`;
    overlayHolder.appendChild(div);
    touchIndex++;
    div.classList.add(`ALIVE`);
    return div;
}



function startGame() {
    
    document.getElementById(`startBtn`).classList.remove(`ALIVE`);
    myGamePiece = new component(redWidth, 2, "red", lane0, redHeight);
    myGamePiece2 = new component(redWidth, 2, "red", lane1, redHeight);
    myGamePiece3 = new component(redWidth, 2, "red", lane2, redHeight);
    myGamePiece4 = new component(redWidth, 2, "red", lane3, redHeight);
    //touchscreen here
    // touch1 = new component(redWidth, 40, "transparent", lane0, redHeight);
    // touch2 = new component(redWidth, 40, "transparent", lane1, redHeight);
    // touch3 = new component(redWidth, 40, "transparent", lane2, redHeight);
    // touch4 = new component(redWidth, 40, "transparent", lane3, redHeight);
    if (!touchMade) {
        touch1 = createTouchOverlay(redWidth, 500);
        touch2 = createTouchOverlay(redWidth, 500);
        touch3 = createTouchOverlay(redWidth, 500);
        touch4 = createTouchOverlay(redWidth, 500);
    }
    
    

    // theLine = new component(270, 2, "red", 0, 400); //this doesnt do anything yet lol
    myScore = new component("30px", "Consolas", "white", 0, 90, "text");
    missCountDisplay = new component("30px", "Consolas", "white", 0, 120, "text");
    comboDisplay = new component("30px", "Consolas", "white", 0, 150, "text");
    nextNoteIndex = 0;
    lastFrameTime = null;

    myGameArea.start();
    theEventListeners();
    music.currentTime = 0;
    music.volume = 0.05;
    setTimeout(() => {
        setTimeout(() => {
            music.play();
        }, 250);
        gameStartTime = performance.now(); // start tracking audio sync from this point
    }, 1000); // 1000ms = 1 second
    sillyCanvas = document.querySelector(`canvas`);
    sillyCanvas.classList.remove(`theRemoving`);
}
let lastFrameTime = null;
// el component maker
function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.x = x;
    this.y = y;
    this.hit = false;
    this.speedY = 750;
    this.speedY = canvHeight * (55 / 48);
    // this.speedY = 550;
    // gonna be honest idk how this works
    this.update = function () {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function (deltaTime) {
        this.y += this.speedY * deltaTime;
        this.hitBottom();
    }
    this.hitBottom = function () {
        if (color === "red") {
            let rockbottom = myGameArea.canvas.height - this.height;
            if (this.y > rockbottom) {
                this.y = rockbottom;
            }
        }
        // green blocks do not stop — they just keep falling
    }
    // gonna be honest idk how this works either
    this.crashWith = function (otherobj) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}
// ALL ME BABY LETS GO 



function keyChecker(e) {
    if (e.key === `d` && !keyPressed) {
        keyPressed = true;
        keyJustPressed = true; // mark this as a new press
    }
    if (e.key === `f` && !keyPressed2) {
        keyPressed2 = true;
        keyJustPressed2 = true; // mark this as a new press
    }
    if (e.key === `j` && !keyPressed3) {
        keyPressed3 = true;
        keyJustPressed3 = true; // mark this as a new press
    }
    if (e.key === `k` && !keyPressed4) {
        keyPressed4 = true;
        keyJustPressed4 = true; // mark this as a new press
    }
}
function keyUpChecker(e) {
    if (e.key === `d` || e.key === `f` || e.key === `j` || e.key === `k`) {
        keyPressed = false;
        keyPressed2 = false;
        keyPressed3 = false;
        keyPressed4 = false;
    }
}
function touchChecker1() {
    touchPressed1 = true;
    keyJustTouched1 = true;
}
function touchChecker2() {
    touchPressed2 = true;
    keyJustTouched2 = true;
}
function touchChecker3() {
    touchPressed3 = true;
    keyJustTouched3 = true;
}
function touchChecker4() {
    touchPressed4 = true;
    keyJustTouched4 = true;
}

function theEventListeners() {
    myBody.addEventListener(`keydown`, keyChecker);
    myBody.addEventListener(`keyup`, keyUpChecker);
    touch1.addEventListener(`mousedown`, touchChecker1);
    touch2.addEventListener(`mousedown`, touchChecker2);
    touch3.addEventListener(`mousedown`, touchChecker3);
    touch4.addEventListener(`mousedown`, touchChecker4);
    
}

function rhythmRemoveEventListeners() {
    myBody.removeEventListener(`keydown`, keyChecker);
    myBody.removeEventListener(`keyup`, keyUpChecker);
    touch1.removeEventListener(`mousedown`, touchChecker1);
    touch2.removeEventListener(`mousedown`, touchChecker2);
    touch3.removeEventListener(`mousedown`, touchChecker3);
    touch4.removeEventListener(`mousedown`, touchChecker4);
}
// ALL ME BABY RAHHH


// don't need to understand lol
function drawLaneLines() {
    const ctx = myGameArea.context;
    const laneWidth = myGameArea.canvas.width / 4;

    ctx.strokeStyle = "#cccccc"; // light gray line
    ctx.lineWidth = 1;

    for (let i = 1; i < 4; i++) {
        const x = i * laneWidth;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, myGameArea.canvas.height);
        ctx.stroke();
    }
}
// staircase (to right): d, f, j, k
// staircase (to left): k, j, f, d
// crisscross (on left): k, d, f  
let d = spawnLanes[0];
let f = spawnLanes[1];
let j = spawnLanes[2];
let k = spawnLanes[3];
// const timings = [1, 2, 3, 4,   6, 7, 8,  10, 11, 12, 13,  15, 16, 17,  19, 19, 20,  21, 21, 22,   23, 23];
// const laneList = [d, f, j, k,   d, f, d,   k, j, f, d,    k, j, k,     k, d, f,     k, d, j,      k, d];  
// const timings = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const laneList = [d, d, d, d, d, d, d, d, d, d, d, d];
const z = 468.75;
const b = z / 2;
let p = 2;
const laneList = [
    `d1`, `f1`, `d1`, `f1`,
    `d1`, `d1`, `f1`, `j1`,
    `k1`, `d1`, `f1`, `d1`,

    `j1`, `f1`, `j1`, `f1`,
    //16 combo
    `k1`, `j1`, `k1`, `j1`,
    `k1`, `k1`, `j1`, `f1`,
    `d1`, `k1`, `j1`, `k1`,

    `k5`, `f2`, `j2`, `d2`,
    //32combo
    `k2`, `d1`, `j1`, `f1`,

    `j5`, `d2`, `k2`, `f2`,

    `d2`, `k1`, `d1`, `k1`,

    `k5`, `k2`, `d2`, `d2`,
    //48combo
    `d2`, `k1`, `f1`, `j1`,
    `d1`, `d2`, `f2`, `k2`,
    `d2`, `j2`, `d2`, `f1`,

    `j1`, `k1`, `d1`, `f1`,
    //64combo
    `d1`, `k2`, `j2`, `d2`,
    `f2`,
    //69combo
    //anyone can find me (25sec)
    `d2`, `k1`, `f1`, `d1`,
    `j1`, `f2`,
    //75combo
    //hear your music 
    `d2`, `k1`,
    `f1`, `j1`, `d1`, `k2`,
    //81combo
    //running through my mind (29sec)
    `k2`, `j1`, `f1`, `d1`,
    `k1`,
    //86combo
    //im thinking
    `f1`, `j1`, `k1`,
    //89combo     ^
    //miku miku (31sec)
    `d1`, `k2`, `d2`, `k2`,
    //93combo           ^
    //oo ee oo
    `d2`, `k1`, `j1`, `f1`,
    //97               ^
    //im thinking
    `k2`, `j1`, `f1`,
    //100combo    ^

    //miku miku (34sec)
    `k1`, `d2`, `k2`, `d2`,
    //oo ee oo 
    `k2`, `d1`, `j1`, `f1`,
    //108combo         ^

    `d2`, `f1`, `k1`, `j1`,

    `f1`, `j1`, `f1`, `k1`,
    //116combo         ^
    `d1`, `k1`, `d1`,
    //oo ee oo
    `j1`, `f1`, `j1`, `f1`,
    //musica -> im thinking
    `j1`, `k1`, `j1`, `d1`,
    //127combo         ^
    //miku miku 
    `j1`, `k1`, `k1`, `j1`,
    `f1`, `d1`, `d1`, `f1`,
    //135combo         ^
    //oo ee oo
    `k1`, `f1`, `d1`, `d1`,
    //139combo         ^
    //musica
    `d2`, `k1`, `d1`,
    //142combo   ^
    //im on 
    `k1`, `j2`,
    //144combo^
    //top of the world (46sec)
    `f2`, `d1`, `j1`, `k1`,
    //because of you
    `d3`, `k2`, `j1`, `d1`,
    //156combo         ^
    //all i 
    `k2`, `f0`,
    `j2`, `d0`,
    //160combo^
    //wanted to do
    `f2`, `k1`, `j1`, `d1`,
    //164combo        ^
    //is follow you
    `d3`, `f2`, `j1`, `k1`,
    //168combo          ^
    //ill keep
    `k2`, `j2`,
    //170combo ^
    //singing along
    `f2`, `d1`, `f1`, `j1`,
    //174combo        ^
    //to
    `j3 `,
    //all of you 
    `f2`, `k1`, `j1`,
    //ill keep
    `f2`, `f2`,

    `f2`, `j1`, `k1`, `j1`,
    `d1`, `f1`,
    `k1`, `j1`, `f1`,
    //im thinking (1min)
    `k1`, `f1`, `j1`,
    //miku miku
    `k1`, `d0`,
    `j2`,
    `k2`, `d0`,
    `f2`,
    //oo ee oo
    `j2`, `k1`, `f1`, `d1`,
    //im thinking 
    `f2`, `j1`, `k1`,
    //miku miku
    `d1`, `f1`, `k1`,
    `d1`, `k1`, `j1`, `d1`,
    `k1`,
    //oo ee oo
    `f1`, `j1`, `f1`,
    `d1`,
    //im thinking
    `k2`, `j1`, `f1`,
    //miku miku
    `k1`, `j1`, `d1`,

    `d2`, `f1`, `k1`,

    `f2`, `j1`, `d1`, `k1`,
    //im thinking 
    `f2`, `k1`, `j1`, `f1`,
    `j1`, `d1`, `j2`, `f1`,
    `k1`,
    // 
    `j2`, `f1`, `k1`, `d1`


];
// const laneList = [`d1`, `f1`, `j1`, `k1`];

//easier

// const timings = [1, 1.5, 1.5, 1.5,    2, 2, 3]
// const laneList = [d, f, j, k,   d, f, d];  
let combo = 1;
let noteWidth = canvWidth * (.9703 / 4);
let noteHeight = Math.floor(canvHeight * (.229166))

function pushObstacle(lane) {
    myObstacles.push(new component(noteWidth, noteHeight, "aqua", lane, 0));
}


// function startObstacles() {
//     for (let i = 0; i < timings.length; i++) {
//         setTimeout(() => {
//             pushObstacle(laneList[i]);
//         }, b*timings[i]);
//     }
// }

// Schroeder's Test
/* 

let p = 0;

const laneList = [1d, 1f, 1j, 1k,   1d, 1f, 1d,   2k, 1j, 1f, 1d,    1k, 1j, 1k,     2k, 0d, 1f,     1k, 0d, 1j,      1k, 0d];

for (let i = laneList.length - 1; i>= 0, i--;) {
    const obstacle = laneList[i];

    p = obstacle[0] + p;
    for (let o = 0; o < laneList.length; o) {
            timings.push(p)
        }
    

}
*/





function gameEnd(misses, maxcombo) {
    resetter();
    overlayHolder.classList.remove(`ALIVE`);
    touch1.classList.remove(`ALIVE`);
    touch2.classList.remove(`ALIVE`);
    touch3.classList.remove(`ALIVE`);
    touch4.classList.remove(`ALIVE`);
    touchIndex = 0;
    touchMade = 1;
    setTimeout(() => {
        gameActive = false;
        if ((((laneList.length - misses) / laneList.length) * 100).toFixed(4) >= 65) {
            scene.scenes[1].run();
        } else {
            scene.scenes[0].run();
        }

        sillyCanvas.classList.add(`theRemoving`);
        myGameArea.clear();
        gameHolder.classList.remove(`hidden`);
        gameHolder.classList.remove(`theRemoving`);
        // gameHolder.innerHTML += `<p> Misses: ${misses}</p>`;
        // gameHolder.innerHTML += `<p> Maximum Combo: ${maxcombo - 1}</p>`;
        // gameHolder.innerHTML += `<p> Accuracy: ${(((laneList.length - misses) / laneList.length) * 100).toFixed(4)}%</p>`;

        scoreCounter = missCounter = jfkdead = jfk = maxCombo = nextNoteIndex = 0;
    }, 1500);
    //keyframe into thingy

    //display misses and combo and uhhh probably accuracy

    //move back to story 
    setTimeout(() => {
        music.pause();
    }, 2000);


}

function updateGameArea(timestamp) {
    if (gameActive) {
        if (!lastFrameTime) lastFrameTime = timestamp;
        const elapsed = (timestamp - lastFrameTime) / 1000;
        const deltaTime = elapsed;
        lastFrameTime = timestamp;

        if (combo > maxCombo) {
            maxCombo = combo;
        }
        myGameArea.clear();
        drawLaneLines();
        const currentTime = gameStartTime ? (performance.now() - gameStartTime) / 1000 : 0;
        // the new startobstacles
        while (nextNoteIndex < timings.length && currentTime >= (b * timings[nextNoteIndex]) / 1000) {
            // Get the character (like 'd', 'f', etc.)
            const laneChar = laneList[nextNoteIndex][0];
            // Map it to a lane position
            let laneX;
            switch (laneChar) {
                case 'd': laneX = d; break;
                case 'f': laneX = f; break;
                case 'j': laneX = j; break;
                case 'k': laneX = k; break;
                default:
                    console.warn(`Unknown lane: ${laneChar}`);
                    laneX = 0;
            }
            // Then push the obstacle in that lane
            pushObstacle(laneX);
            nextNoteIndex++;
        }
        jfkdead += 1;
        if (nextNoteIndex == laneList.length && jfk == 0 && jfkdead % 90 == 0) {
            setTimeout(() => {
                gameEnd(missCounter, maxCombo);
            }, 2500);
            jfk += 1;
        }
        // Move and draw all obstacles
        for (let i = myObstacles.length - 1; i >= 0; i--) {
            const obstacle = myObstacles[i];
            if (obstacle.y > myGameArea.canvas.height) {
                missCounter++;
                combo = 1;
                myObstacles.splice(i, 1);
                continue;
            }
            if ((myGamePiece.crashWith(obstacle) && keyJustPressed && !obstacle.hit) || (myGamePiece.crashWith(obstacle) && keyJustTouched1 && !obstacle.hit)) {

                scoreCounter += 100 * (combo);
                combo += 1;
                obstacle.hit = true;
                myObstacles.splice(i, 1);
                continue; // skip the rest of the loop for this one
            }
            if ((myGamePiece2.crashWith(obstacle) && keyJustPressed2 && !obstacle.hit) || (myGamePiece2.crashWith(obstacle) && keyJustTouched2 && !obstacle.hit)) {

                scoreCounter += 100 * (combo);
                combo += 1;
                obstacle.hit = true;
                myObstacles.splice(i, 1);
                continue; // skip the rest of the loop for this one
            }
            if ((myGamePiece3.crashWith(obstacle) && keyJustPressed3 && !obstacle.hit) || (myGamePiece3.crashWith(obstacle) && keyJustTouched3 && !obstacle.hit)) {

                scoreCounter += 100 * (combo);
                combo += 1;
                obstacle.hit = true;
                myObstacles.splice(i, 1);
                continue; // skip the rest of the loop for this one
            }
            if ((myGamePiece4.crashWith(obstacle) && keyJustPressed4 && !obstacle.hit) || (myGamePiece4.crashWith(obstacle) && keyJustTouched4 && !obstacle.hit)) {

                scoreCounter += 100 * (combo);
                combo += 1;
                obstacle.hit = true;
                myObstacles.splice(i, 1);
                continue; // skip the rest of the loop for this one
            }
            obstacle.newPos(deltaTime);
            obstacle.update();
        }
        myGamePiece.update();
        myGamePiece2.update();
        myGamePiece3.update();
        myGamePiece4.update();
        myScore.text = "SCORE: " + scoreCounter;
        comboDisplay.text = "COMBO: " + (combo - 1);
        missCountDisplay.text = "MISSES: " + missCounter;
        myScore.update();
        comboDisplay.update();
        missCountDisplay.update();
        // Reset keys for one-time press detection
        keyJustPressed = keyJustPressed2 = keyJustPressed3 = keyJustPressed4 = false;
        keyJustTouched1 = keyJustTouched2 = keyJustTouched3 = keyJustTouched4 = false;
        requestAnimationFrame(updateGameArea);
    }
}




