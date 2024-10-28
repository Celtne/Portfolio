let onOff = [];

let col1;
let col2;

let rows = 30;
let cols = 30;

let xLoc = 0, yLoc = 0;
let xSpeed =4, ySpeed = 3;



function setup() {
  
  
  createCanvas(windowWidth, windowHeight);
  
  colorMode(HSB);
  
  col1 = color("#ff6ec7");
  col2 = color("#ff00ff");
  col3 = color("#");

  let counter = 0;
  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      onOff[counter] = 0;
      counter++;
    }
  }

  print(onOff);
  noStroke();
}

function draw() {
  background(220);
  
  
 

  var counter = 0;
  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      fill(255);

      if (
  
        xLoc > x * (width / cols) &&
        xLoc < (x + 1) * (width / cols) &&
        yLoc > y * (height / rows) &&
        yLoc < (y + 1) * (height / rows) 
        //mouseIsPressed == true
        

      ) {
        let colFactor = map(x, 0, 50, 0, 1);

        //print(x*width/cols);
        onOff[counter] = lerpColor(col1, col2, colFactor);
        // fill(255, 0, 0);
      }

      if (onOff[counter] != 0) {
        
        fill(lerpColor(onOff[counter],col3, random(0.5)));
        
        
        
        stroke(onOff[counter]);
      } else {
        fill(0);
        stroke(0);
      }

      rect(
        x * (width / cols),
        y * (height / rows),
        width / cols,
        height / rows
      );

      counter++;
      //text(,25 + i*50 ,25);
    }
  }
  
  fill(0,0);
  stroke(255);
  ellipse(xLoc, yLoc, 50,50);
  
 
  
  if(xLoc> width){
    xSpeed = - xSpeed;
  }
   if(yLoc> height){
    ySpeed = - ySpeed;
  }
  if(yLoc<0){
    ySpeed = - ySpeed;
  }
    if(xLoc< 0){
    xSpeed = - xSpeed;
  }
  
  
  

   xLoc+=xSpeed;
  yLoc+=ySpeed;
}

function mousePressed() {
  print(onOff);
}
