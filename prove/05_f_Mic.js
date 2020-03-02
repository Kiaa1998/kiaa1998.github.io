// INTERACTION & INTERFACES //
// PART 1f: Mic //

var mic;

function preload() {
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn(); // create an Audio input line
  mic.start(); // starts the audio input --> requests access to mic √
}

function touchStarted() {
  getAudioContext().resume();
} 

// function startMic(){
//   mic.start(); // starts the audio input --> requests access to mic √
// }
//
function draw() {
  background(0);

  // songButton = createButton("Start Mic");
  // songButton.position(100, 100);
  // songButton.mouseClicked(startMic);

  var volume = mic.getLevel(); // this should get microphone input level as a value between 0 and 1
  console.log(volume);  // VOLUME START WORKING SEEMINGLY ONLY ONCE YOU START AN AUDIO TRACK?

  fill(255,0,0);
  noStroke();
  ellipse(250,250,volume * 200);
}

// Input always returns = 0
// THERE'S AN ISSUE WITH THE LIBRARY MOST LIKELY
// THEORETICALLY THE CODE WORKS

// 02/03 Test 3.0
// Set an interaction ahead of starting mic --> interact/start mic/draw
