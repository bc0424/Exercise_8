// With a partner, do the following:
// take a story from https://www.gutenberg.org/ebooks/search/?sort_order=downloads
// bring the text into P5 as a string
// Use at least 3 expressions to parse the string of text.
// use http://regexr.com/ as guide to formulate your expressions

//For homework finish the above individually to also include:


function preload(){
 rawtext = loadStrings("data/Tale_of_Two_cities.txt");
}
function setup() {
  createCanvas(500,500);
  background(255);

  wholetext = join(rawtext, " ")
  var it_was = wholetext.replace(/It was the/gi, "Once upon a time");
  var change = it_was.replace(/Lord/gi, "Bob");
  var story = change.replace(/we/gi, "they");
  console.log(story);
  
 
 //Want to switch the words that represent numbers into digits
 
 for (counter = 0; counter < story.length; counter++){
  var word = story[counter];
  if (word == '.'){
   frameRate(5);
   fill(255,0,0);
   ellipse(random(width), random(height), 30,30)
  }
  if (word == ','){
   fill(50,random(255), random(255), 60);
   ellipse(random(width), random(height), 30,30);
   }
  }
 }
 
 


function draw() {
  
}