var playerX = 185
var playerY = 185
var playerSpeed = 100

function setup() {
  createCanvas(400, 400);
  frameRate(48)
}

function draw() {
  background(0, 0, 0)

  fill(255, 255, 255)
  rect(playerX, playerY, 30, 30)
}

function keyPressed() {
  if (keyCode == W) {
    playerY -= playerSpeed * deltaTime;
    alert("Key w pressed")
  }
}
