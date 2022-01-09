var playerX = 185;
var playerY = 185;
var playerSpeed = 0.3;

var paused = false;

var coinX = 0;
var coinY = 0;

var coins = 0;

const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;
const KEY_ESCAPE = 27;

function setup() {
  createCanvas(400, 400);
  frameRate(60)

  coinX = random(0, 370);
  coinY = random(0, 370);
}

function draw() {
  background(0, 0, 0)

  fill(255, 255, 255)

  if (!paused) {update();}
  else {text("Paused", 350, 10);}

  playerX = clamp(playerX, 0, 370);
  playerY = clamp(playerY, 0, 370);

  rect(playerX, playerY, 30, 30);

  fill(252, 227, 3);
  rect(coinX, coinY, 20, 20);

  fill(255, 255, 255);
  text("Coins: " + coins, 5, 10);
}


function keyPressed() {
  if (keyCode === KEY_ESCAPE) {paused = !paused;}
}


function clamp(value, min, max) {
  var clamped
  if (value < min) {
    clamped = min;
  }
  else if (value > max) {
    clamped = max;
  }
  else {
    clamped = value;
  }
  return clamped;
}


function update() {
  if (keyIsDown(KEY_W) || keyIsDown(UP_ARROW)) {
    playerY -= playerSpeed * deltaTime;
  }
  if (keyIsDown(KEY_S) || keyIsDown(DOWN_ARROW)) {
    playerY += playerSpeed * deltaTime;
  }
  if (keyIsDown(KEY_A) || keyIsDown(LEFT_ARROW)) {
    playerX -= playerSpeed * deltaTime;
  }
  if (keyIsDown(KEY_D) || keyIsDown(RIGHT_ARROW)) {
    playerX += playerSpeed * deltaTime;
  }

  if (isColliding(playerX, playerY, 30, 30, coinX, coinY, 20, 20)) {
    coins += 1;
    coinX = random(0, 370);
    coinY = random(0, 370);
  }
}


function isColliding(x1, y1, w1, h1, x2, y2, w2, h2){
  if((x1 > x2) && (x1 < x2 + w2) && (y1 > y2) && (y1 < y2 + h2)){
    return true;
  } else {
    return false;
  }
}
