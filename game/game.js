var playerX = 185; // The position of the player on the X axis
var playerY = 185; // The position of the player on the Y axis
var playerSpeed = 0.25; // The movement speed of the player

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

  // Sets the coin's position to random coordinates
  coinX = random(15, 385);
  coinY = random(15, 385);
}

function draw() {
  background(0, 0, 0)

  fill(255, 255, 255)

  // Updates the game if it is not paused
  if (!paused) {update();}
  else {text("Paused", 350, 10);}

  // Clamps the player's position
  // so it doesn't go off screen
  playerX = clamp(playerX, 15, 385);
  playerY = clamp(playerY, 15, 385);

  // Drawing the player
  ellipse(playerX, playerY, 30);

  // Drawing the coin
  fill(252, 227, 3);
  ellipse(coinX, coinY, 20);

  // Drawing the score counter
  fill(255, 255, 255);
  text("score: " + coins, 5, 10);
}


function keyPressed() {
  if (keyCode === KEY_ESCAPE) {paused = !paused;}
}


// Function that clamps a value
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


// Function that updates the game
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

  if (isColliding(playerX, playerY, 15, coinX, coinY, 10)) {
    coins += 1;
    coinX = random(15, 385);
    coinY = random(15, 385);
  }
}


// Function for checking collision between two circles
function isColliding(x1, y1, r1, x2, y2, r2) {
  d = dist(x1, y1, x2, y2);

  if (d < r1 + r2) {
    return true;
  }
  else {
    return false;
  }
}
