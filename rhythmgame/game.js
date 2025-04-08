let myGamePiece, myGamePiece2, myGamePiece3, myGamePiece4;
let theLine;
let myObstacles = [];
let myScore;
let myBody = document.querySelector(`body`)
let scoreCounter = 0;

let missCounter = 0;
let nextSpawnInterval = getRandomSpawnInterval();

let keyPressed, keyPressed2, keyPressed3, keyPressed4 = false;
let keyJustPressed, keyJustPressed2, keyJustPressed3, keyJustPressed4 = false

const spawnLanes = [0, 67, 135, 203]; // approx. evenly spaced

function startGame() {
    myGamePiece = new component(66.5, 2, "red", 0, 400);
    myGamePiece2 = new component(66.5, 2, "red", 68, 400);
    myGamePiece3 = new component(66.5, 2, "red", 135.5, 400);
    myGamePiece4 = new component(66.5, 2, "red", 203, 400);
    theLine = new component(270, 2, "red", 0, 400); //this doesnt do anything yet lol



    myScore = new component("30px", "Consolas", "black", 0, 90, "text");
    missCountDisplay = new component("30px", "Consolas", "black", 0, 120, "text");
    myGameArea.start();
}

let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 270;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
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
    this.speedY = 6;

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
    this.newPos = function () {
        this.y += this.speedY;
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
myBody.addEventListener(`keydown`, function (e) {
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
});










// ALL ME BABY RAHHH
myBody.addEventListener(`keyup`, function (e) {
    if (e.key === `d` || e.key === `f` || e.key === `j` || e.key === `k`) {
        keyPressed = false;
        keyPressed2 = false;
        keyPressed3 = false;
        keyPressed4 = false;
    }
});



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

function updateGameArea() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (let i = myObstacles.length - 1; i >= 0; i--) {
        const obstacle = myObstacles[i];

        // if red collides and key is pressed
        if (myGamePiece.crashWith(obstacle) && keyJustPressed && !obstacle.hit) {
            scoreCounter += 100;
            obstacle.hit = true;
            myObstacles.splice(i, 1);
            continue; // skip the rest of the loop for this one
        }
        if (myGamePiece2.crashWith(obstacle) && keyJustPressed2 && !obstacle.hit) {
            scoreCounter += 100;
            obstacle.hit = true;
            myObstacles.splice(i, 1);
            continue; // skip the rest of the loop for this one
        }
        if (myGamePiece3.crashWith(obstacle) && keyJustPressed3 && !obstacle.hit) {
            scoreCounter += 100;
            obstacle.hit = true;
            myObstacles.splice(i, 1);
            continue; // skip the rest of the loop for this one
        }
        if (myGamePiece4.crashWith(obstacle) && keyJustPressed4 && !obstacle.hit) {
            scoreCounter += 100;
            obstacle.hit = true;
            myObstacles.splice(i, 1);
            continue; // skip the rest of the loop for this one
        }


        // if it falls off the bottom, count as a miss
        if (obstacle.y > myGameArea.canvas.height) {
            missCounter++;
            myObstacles.splice(i, 1);
            continue;
        }


        obstacle.newPos();
        obstacle.update();
    }

    myGameArea.clear();
    drawLaneLines(); // draw the lane dividers
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo === 1 || myGameArea.frameNo % nextSpawnInterval === 0) {
        x = myGameArea.canvas.width;
        // minHeight = 20;
        // maxHeight = 200;
        // height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);




        // section for making game objects


        const laneIndex = Math.floor(Math.random() * spawnLanes.length);
        const spawnX = spawnLanes[laneIndex];
        let sillyObstacles = myObstacles.push(new component(67.5, 100, "green", spawnX, 0));
        nextSpawnInterval = getRandomSpawnInterval(); // reset for next spawn

        // myObstacles.push(new component(10, height, "green", x, 0));

    }
    for (i = 0; i < myObstacles.length; i += 1) {


        myObstacles[i].newPos();
        myObstacles[i].update();
    }
    myScore.text = "SCORE: " + scoreCounter;
    myScore.update();
    missCountDisplay.text = "MISSES: " + missCounter;
    missCountDisplay.update();
    // myGamePiece.newPos();
    myGamePiece.update();
    myGamePiece2.update();
    myGamePiece3.update();
    myGamePiece4.update();
    keyJustPressed = false;
    keyJustPressed2 = false;
    keyJustPressed3 = false;
    keyJustPressed4 = false;
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
}
function getRandomSpawnInterval() {
    const min = 10;
    const max = 20;
    const step = 5;
    const range = Math.floor((max - min) / step) + 1;
    return min + (Math.floor(Math.random() * range) * step);
}
