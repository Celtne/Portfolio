let vid;
let vScale = 8;
let sound;

function preload() {
  sound = loadSound('torn_wings_cant_fly.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  pixelDensity(1);
  
  vid = createCapture(VIDEO, {flipped: true});
  vid.size(width / vScale, height / vScale);
    vid.hide();
  
    //  vid.pixelDensity(1);
  sound.play();
  sound.loop();
}

function draw() {
  
  vid.loadPixels();
  
  for (let x = 0; x < vid.width; x++) {
    for (let y = 0; y < vid.height; y++) {
      index = (x + y * vid.width) * 4;
      
      let r = vid.pixels[index];     
      

      fill(220, random(r), 150); 
      
      ellipse(x * vScale, y * vScale, vScale, vScale);
    }
  }
  
  vid.updatePixels();
}
