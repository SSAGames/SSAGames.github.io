var playerX = 185
var playerY = 185
var playerSpeed = 0.5

const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;

function setup() {
  createCanvas(400, 400);
  frameRate(60)
}

function draw() {
  background(0, 0, 0)

  fill(255, 255, 255)

  if (keyIsDown(KEY_W)) {
    playerY -= playerSpeed * deltaTime;
  }
  if (keyIsDown(KEY_S)) {
    playerY += playerSpeed * deltaTime;
  }
  if (keyIsDown(KEY_A)) {
    playerX -= playerSpeed * deltaTime;
  }
  if (keyIsDown(KEY_D)) {
    playerX += playerSpeed * deltaTime;
  }

  playerX = clamp(playerX, 0, 370);
  playerY = clamp(playerY, 0, 370);

  rect(playerX, playerY, 30, 30)
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
