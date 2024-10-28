let glitchSquares = [];

let canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  
  for (let i = 0; i < 20; i++) { 
    let x = random(width);
    let y = random(height);
    let size = random(2, 10); //
    let alpha = 255;
    glitchSquares.push({x, y, size, alpha, visible: false, flickerTimer: random(5, 30)}); 
  }

  frameRate(30);
}

function draw() {
  background(255, 97, 177);

  for (let i = 0; i < glitchSquares.length; i++) {
    let square = glitchSquares[i];

    square.flickerTimer--;

    if (square.flickerTimer <= 0) {
      square.visible = !square.visible; 
      square.flickerTimer = random(5, 30); 
    }

    if (square.visible) {
      let flicker = random(1) > 0.3; 
      if (flicker) {
        square.alpha = 255;
      } else {
        square.alpha = 0;
      }

      fill(0, square.alpha);
      rect(square.x, square.y, square.size, square.size);
    }
  }
}
