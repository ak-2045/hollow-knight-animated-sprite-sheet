const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 250;
const CANVAS_HEIGHT = canvas.height = 250;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const CANVAS_WIDTH2 = canvas2.width = 250;
const CANVAS_HEIGHT2 = canvas2.height = 250;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
const CANVAS_WIDTH3 = canvas3.width = 250;
const CANVAS_HEIGHT3 = canvas3.height = 250;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
const CANVAS_WIDTH4 = canvas4.width = 250;
const CANVAS_HEIGHT4 = canvas4.height = 250;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
const CANVAS_WIDTH5 = canvas5.width = 250;
const CANVAS_HEIGHT5 = canvas5.height = 250;

const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d');
const CANVAS_WIDTH6 = canvas6.width = 250;
const CANVAS_HEIGHT6 = canvas6.height = 250;

const canvas7 = document.getElementById('canvas7');
const ctx7 = canvas7.getContext('2d');
const CANVAS_WIDTH7 = canvas7.width = 250;
const CANVAS_HEIGHT7 = canvas7.height = 250;

const canvas8 = document.getElementById('canvas8');
const ctx8 = canvas8.getContext('2d');
const CANVAS_WIDTH8 = canvas8.width = 250;
const CANVAS_HEIGHT8 = canvas8.height = 250;

const canvas9 = document.getElementById('canvas9');
const ctx9 = canvas9.getContext('2d');
const CANVAS_HEIGHT9 = canvas9.height = 250;
const CANVAS_WIDTH9 = canvas9.width = 250;

const playerImage = new Image();
playerImage.src = 'assets/hollow_knight.png';

const spriteWidth = 128;
const spriteHeight = 128;
const zoom = 1.3;
const zoomedWidth = spriteWidth * zoom;
const zoomedHeight = spriteHeight * zoom;

const destX = (CANVAS_WIDTH - zoomedWidth) / 2;
const destY = (CANVAS_HEIGHT - zoomedHeight) / 2;

const destX2 = (CANVAS_WIDTH2 - zoomedWidth) / 2;
const destY2 = (CANVAS_HEIGHT2 - zoomedHeight) / 2;

const destX3 = (CANVAS_WIDTH3 - zoomedWidth) / 2;
const destY3 = (CANVAS_HEIGHT3 - zoomedHeight) / 2;

const destX4 = (CANVAS_WIDTH4 - zoomedWidth) / 2;
const destY4 = (CANVAS_HEIGHT4 - zoomedHeight) / 2;

const destX5 = (CANVAS_WIDTH5 - zoomedWidth) / 2;
const destY5 = (CANVAS_HEIGHT5 - zoomedHeight) / 2;

const destX6 = (CANVAS_WIDTH6 - zoomedWidth) / 2;
const destY6 = (CANVAS_HEIGHT6 - zoomedHeight) / 2;

const destX7 = (CANVAS_WIDTH7 - zoomedWidth) / 2;
const destY7 = (CANVAS_HEIGHT7 - zoomedHeight) / 2;

const destX8 = (CANVAS_WIDTH8 - zoomedWidth) / 2;
const destY8 = (CANVAS_HEIGHT8 - zoomedHeight) / 2;

const destX9 = (CANVAS_WIDTH9 - zoomedWidth) / 2;  
const destY9 = (CANVAS_HEIGHT9 - zoomedHeight) / 2;

// walking
const walking = {
  frameIndex: 0,
  lastTime: 0,
  fps: 8,
  frameInterval: 1000 / 8,
  totalFrames: 8,
  startCol: 0,
  row: 0
};

// running
const running = {
  frameIndex: 0,
  lastTime: 0,
  fps: 8,
  frameInterval: 1000 / 8,
  totalFrames: 5,
  startCol: 11,
  row: 0 
};

// dashing
const dashing = {
  frameIndex: 0,
  lastTime: 0,
  fps: 6,
  frameInterval: 1000 / 6,
  totalFrames: 11,
  startCol: 0,
  row: 4 
};

// crawling
const crawling = {
    frameIndex: 0,
    lastTime: 0,
    fps: 8,
    frameInterval: 1000 / 8,
    totalFrames: 7,
    startCol: 5,
    row: 1 
  };

// transforming
const transforming = {
    frameIndex: 0,
    lastTime: 0,
    fps: 8,
    frameInterval: 1000 / 8,
    totalFrames: 16,
    startCol: 0,
    row: 10
};

// jumping
const jumping = {
    frameIndex: 0,
    lastTime: 0,
    fps: 8,
    frameInterval: 1000 / 8,
    totalFrames: 8,
    startCol: 0,
    row: 9
};

// reading
const reading = {
    frameIndex: 0,
    lastTime: 0,
    fps: 8,
    frameInterval: 1000 / 8,
    totalFrames: 8,
    startCol: 7,
    row: 8
};

// falling
const falling = {
    frameIndex: 0,
    lastTime: 0,
    fps: 8,
    frameInterval: 1000 / 8,
    totalFrames: 6,
    startCol: 4,
    row: 11
};

//blushing
const blushing = {
    frameIndex: 0,
    lastTime: 0,
    fps: 6,
    frameInterval: 1000 / 6,
    totalFrames: 8,
    startCol: 0,
    row: 14
};

// white background
function drawBackground(ctx, width, height) {
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.1;
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1;
}

function drawSprite(ctx, config, destX, destY) {
  const col = config.frameIndex + config.startCol;
  const frameX = col * spriteWidth;
  const frameY = config.row * spriteHeight;

  ctx.drawImage(
    playerImage,
    frameX, frameY, spriteWidth, spriteHeight,
    destX, destY, zoomedWidth, zoomedHeight
  );

  config.frameIndex = (config.frameIndex + 1) % config.totalFrames;
}

function animateWalking(timeStamp) {
  const deltaTime = timeStamp - walking.lastTime;

  if (deltaTime > walking.frameInterval) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawBackground(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawSprite(ctx, walking, destX, destY);
    walking.lastTime = timeStamp;
  }

  requestAnimationFrame(animateWalking);
}

function animateRunning(timeStamp) {
  const deltaTime = timeStamp - running.lastTime;

  if (deltaTime > running.frameInterval) {
    ctx2.clearRect(0, 0, CANVAS_WIDTH2, CANVAS_HEIGHT2);
    drawBackground(ctx2, CANVAS_WIDTH2, CANVAS_HEIGHT2);
    drawSprite(ctx2, running, destX2, destY2);
    running.lastTime = timeStamp;
  }

  requestAnimationFrame(animateRunning);
}

function animateDashing(timeStamp) {
  const deltaTime = timeStamp - dashing.lastTime;

  if (deltaTime > dashing.frameInterval) {
    ctx3.clearRect(0, 0, CANVAS_WIDTH3, CANVAS_HEIGHT3);
    drawBackground(ctx3, CANVAS_WIDTH3, CANVAS_HEIGHT3);
    drawSprite(ctx3, dashing, destX3, destY3);
    dashing.lastTime = timeStamp;
  }

  requestAnimationFrame(animateDashing);
}

function animateCrawling(timeStamp) {
  const deltaTime = timeStamp - crawling.lastTime;

  if (deltaTime > crawling.frameInterval) {
    ctx4.clearRect(0, 0, CANVAS_WIDTH4, CANVAS_HEIGHT4);
    drawBackground(ctx4, CANVAS_WIDTH4, CANVAS_HEIGHT4);
    drawSprite(ctx4, crawling, destX4, destY4);
    crawling.lastTime = timeStamp;
  }

  requestAnimationFrame(animateCrawling);
}

function animateTransforming(timeStamp) {
  const deltaTime = timeStamp - transforming.lastTime;

  if (deltaTime > transforming.frameInterval) {
    ctx5.clearRect(0, 0, CANVAS_WIDTH5, CANVAS_HEIGHT5);
    drawBackground(ctx5, CANVAS_WIDTH5, CANVAS_HEIGHT5);
    drawSprite(ctx5, transforming, destX5, destY5);
    transforming.lastTime = timeStamp;
  }

  requestAnimationFrame(animateTransforming);
}

function animateJumping(timeStamp) {
  const deltaTime = timeStamp - jumping.lastTime;

  if (deltaTime > jumping.frameInterval) {
    ctx6.clearRect(0, 0, CANVAS_WIDTH6, CANVAS_HEIGHT6);
    drawBackground(ctx6, CANVAS_WIDTH6, CANVAS_HEIGHT6);
    drawSprite(ctx6, jumping, destX6, destY6);
    jumping.lastTime = timeStamp;
  }

  requestAnimationFrame(animateJumping);
}

function animateReading(timeStamp) {
  const deltaTime = timeStamp - reading.lastTime;

  if (deltaTime > reading.frameInterval) {
    ctx7.clearRect(0, 0, CANVAS_WIDTH7, CANVAS_HEIGHT7);
    drawBackground(ctx7, CANVAS_WIDTH7, CANVAS_HEIGHT7);
    drawSprite(ctx7, reading, destX7, destY7);
    reading.lastTime = timeStamp;
  }

  requestAnimationFrame(animateReading);
}

function animateFalling(timeStamp) {
  const deltaTime = timeStamp - falling.lastTime;

  if (deltaTime > falling.frameInterval) {
    ctx8.clearRect(0, 0, CANVAS_WIDTH8, CANVAS_HEIGHT8);
    drawBackground(ctx8, CANVAS_WIDTH8, CANVAS_HEIGHT8);
    drawSprite(ctx8, falling, destX8, destY8);
    falling.lastTime = timeStamp;
  }

  requestAnimationFrame(animateFalling);
}

function animateBlushing(timeStamp) {
  const deltaTime = timeStamp - blushing.lastTime;

  if (deltaTime > blushing.frameInterval) {
    ctx9.clearRect(0, 0, CANVAS_WIDTH9, CANVAS_HEIGHT9);
    drawBackground(ctx9, CANVAS_WIDTH9, CANVAS_HEIGHT9);
    drawSprite(ctx9, blushing, destX9, destY9);
    blushing.lastTime = timeStamp;
  }

  requestAnimationFrame(animateBlushing);
}

playerImage.onload = () => {
  requestAnimationFrame(animateWalking);
  requestAnimationFrame(animateRunning);
  requestAnimationFrame(animateDashing);
  requestAnimationFrame(animateCrawling);
  requestAnimationFrame(animateTransforming);
  requestAnimationFrame(animateJumping);
  requestAnimationFrame(animateReading);
  requestAnimationFrame(animateFalling);
  requestAnimationFrame(animateBlushing);
};