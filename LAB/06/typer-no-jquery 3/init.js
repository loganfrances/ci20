var entryCount = 0;
var displayCount = 0;

var word = "";



document.onkeydown = function(e) {
  
  if (e.keyCode == 8) {
    word = word.slice(0, word.length - 1)
  }
  if (e.keyCode == 13) {
  // reset the program
  word = "";
  }
  if (e.key == " ") {
  word = "":
  }
  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
    word = word + e.key;
  }
  console.log(word);
//   console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
// }
