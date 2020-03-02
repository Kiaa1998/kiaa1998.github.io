// INTERACTION & INTERFACES //
// PART 1f: Mic //

let mic;

function preload() {
}

function setup() {
  createCanvas(500,500);
  mic = new p5.AudioIn(); // create an Audio input line
  mic.start(); // starts the audio input --> requests access to mic √

}

function draw() {
  background(200);

  if(keyIsDown(UP_ARROW)){
    mic.resume();
    var vol = mic.getLevel(); // this should get microphone input level as a value between 0 and 1
    console.log(vol)
  }

  fill(255,0,0);
  noStroke();
  ellipse(250,250,vol*200);
}

// Input always returns = 0
// THERE'S AN ISSUE WITH THE LIBRARY MOST LIKELY
// THEORETICALLY THE CODE WORKS

// 02/03 Test 3.0
// Set an interaction ahead of starting mic --> interact/start mic/draw
