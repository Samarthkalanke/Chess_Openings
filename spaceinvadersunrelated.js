// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Player setup
const playerWidth = 50;
const playerHeight = 50;
const player = {
  x: canvas.width / 2 - playerWidth / 2,
  y: canvas.height - playerHeight - 10,
  width: playerWidth,
  height: playerHeight,
  color: '#00ff00',
  speed: 5
};

// Bullet setup
const bulletWidth = 3;
const bulletHeight = 10;
const bullet = {
  x: player.x + player.width / 2 - bulletWidth / 2,
  y: player.y - bulletHeight,
  width: bulletWidth,
  height: bulletHeight,
  color: '#ff0000',
  speed: 8,
  isFired: false
};

// Enemy setup
const enemyRowCount = 4;
const enemyColumnCount = 8;
const enemies = [];
const enemyWidth = 50;
const enemyHeight = 50;
const enemyPadding = 10;
const enemyOffsetTop = 30;
const enemyOffsetLeft = 30;
for (let row = 0; row < enemyRowCount; row++) {
  for (let col = 0; col < enemyColumnCount; col++) {
    const x = col * (enemyWidth + enemyPadding) + enemyOffsetLeft;
    const y = row * (enemyHeight + enemyPadding) + enemyOffsetTop;
    enemies.push({ x, y, width: enemyWidth, height: enemyHeight, color: '#0000ff', isAlive: true });
  }
}

// Key state tracking
const keyState = {};

// Event listeners for keyboard input
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

// Key down handler
function keyDownHandler(event) {
  keyState[event.keyCode] = true;
}

// Key up handler
function keyUpHandler(event) {
  keyState[event.keyCode] = false;
}

// Update the game state
function update() {
  // Move the player
  if (keyState[37] && player.x > 0) {  // Left arrow key
    player.x -= player.speed;
  }
  if (keyState[39] && player.x < canvas.width - player.width) {  // Right arrow key
    player.x += player.speed;
  }

  // Fire the bullet
  if (keyState[32] && !bullet.isFired) {  // Space key
    bullet.isFired = true;
    bullet.x = player.x + player.width / 2 - bulletWidth / 2;
  }

  // Move the bullet
  if (bullet.isFired) {
    bullet.y -= bullet.speed;
    if (bullet.y < 0) {
      bullet.isFired = false;
    }
  }

  // Move the enemies
  for (let enemy of enemies) {
    if (enemy.isAlive) {
      enemy.x += 1;  // Example movement, you can modify this logic
    }
  }

  // Check for collisions
  for (let enemy of enemies) {
    if (enemy.isAlive && bullet.isFired && collision(bullet, enemy)) {
      bullet.isFired = false;
      enemy.isAlive = false;
    }
  }
}

// Collision detection function
function collision(rect1, rect2) {
  return rect1.x < rect2.x + rect2.width &&
         rect1.x + rect1.width > rect2.x &&
         rect1.y < rect2.y + rect2.height &&
         rect1.y + rect1.height > rect2.y;
}

// Draw the game state
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Draw the bullet
  if (bullet.isFired) {
    ctx.fillStyle = bullet.color;
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
  }

  // Draw the enemies
  for (let enemy of enemies) {
    if (enemy.isAlive) {
      ctx.fillStyle = enemy.color;
      ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    }
  }
}

// Game loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
