let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
    x = width / 2;
  y = height / 2;
  //   let circR = map(x, 0, width, 0, 255);
  // let circG = map(y, 0, height, 0, 255);
  //   let circB = map(mouseX, 0, width, 0, 255);
  // let circA = map(mouseY, 0, width, 0, 255);
    background(220);
  strokeWeight(3);

}

function draw() {
  //     let circR = map(x, 0, width, 0, 255);
  // let circG = map(y, 0, height, 0, 255);
  //   let circB = map(mouseX, 0, width, 0, 255);
  // let circA = map(mouseY, 0, width, 0, 255);
  var r = map(mouseX,0,windowWidth, 0,255) 

  stroke(r, 0, 255) 
  fill(0,0,0)
  
}

function mouseDragged() {
  triangle(pmouseX, pmouseY, 0, 0, mouseX, mouseY, )
}

// function mouseClicked() {
//   rect(pmouseY, pmouseY, mouseY, mouseY,)
// }

// function mouseDragged() {
//     rect(pmouseX,pmouseY, mouseX,mouseY, 255, 255)
// }