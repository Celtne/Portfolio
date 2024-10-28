let stars = [];

class star {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.numPoint = random(3, 10);
    this.triLength = random(10, 40);
    this.triWidth = random(10, 20);
    this.centerDia = random(10, 40);
    this.centerCol = color(220, 20, random(255));
    this.triCol = color(230, 18, random(255));
    this.rotationSpd = random(1, 5);
    this.rotations = 2;
  }

  move() {
    this.loc.add(this.vel);

    // Check if the flower hits the screen edges and reverse velocity
    if (this.loc.x > width - this.centerDia / 2 || this.loc.x < this.centerDia / 2) {
      this.vel.x *= -1; // Reverse x direction
    }
    if (this.loc.y > height - this.centerDia / 2 || this.loc.y < this.centerDia / 2) {
      this.vel.y *= -1; // Reverse y direction
    }
  }

  display() {
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.rotations);

    for (let i = 0; i < this.numPoint; i++) {
      fill(this.triCol);
      rotate(360 / this.numPoint);
      let x1 = this.centerDia / 2;
      let y1 = -this.triWidth / 2;
      let x2 = this.centerDia / 2;
      let y2 = this.triWidth / 2; 
      let x3 = x1 + this.triLength;
      let y3 = 0;


      triangle(x1, y1, x2, y2, x3, y3);
    }

    fill(this.centerCol);
    ellipse(0, 0, this.centerDia, this.centerDia);

    pop();
    this.rotations += this.rotationSpd;
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
      background(0);
  for(const star of stars){
    star.move()
    star.display()
  }

}

function mousePressed() {
  
  stars.push(new star(mouseX,mouseY))
//   let f = new flower(mouseX,mouseY);
//   f.display();
  
}
  
  