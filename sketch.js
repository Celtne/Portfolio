let xLoc = [], yLoc = [], numSegments = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  
  //initialize the arrays
  for(let i = 0; i<numSegments; i++){
    xLoc[i] = width/2;
    yLoc[i] = height/2; 
  }
  
  
  fill(0);
  stroke(255);
  
}

function draw() {
  background(0, 20);
  
  
  xLoc[numSegments] = mouseX;
  yLoc[numSegments] = mouseY;
  
  // xLoc[numSegments] =  xLoc[numSegments] + random(-50,50);
  // yLoc[numSegments] = yLoc[numSegments] + random(-50,50);
  
  
//   xLoc[numSegments-1] = random(width);
//   yLoc[numSegments-1] = random(height);
  
  for(let i = 0; i<numSegments; i++){
    
    xLoc[i] = xLoc[i+1];
    yLoc[i] = yLoc[i+1];
    
    let diameter = sin(map(i,0,numSegments, 0,PI))*150;
    
    let r = sin(map(i,0,numSegments, 0,PI))*255;
    let b = 200 - (cos(map(i,0,numSegments, 10,PI*4))*200);
    
//     r = r + random(-30,30);
    
//     b = b + random(-30,30);
    
    stroke(r, random(200),b );
    
    strokeWeight(random(0,1.5));
    
    fill(0,0)
    rect(xLoc[i],yLoc[i],diameter,diameter);
    
    
  }
 
  
  
}