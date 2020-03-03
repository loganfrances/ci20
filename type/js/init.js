// var marginz = Math.floor(Math.Random()*500)
var entryCount = 0;
var displayCount = 0;

var imageStarts = [150, 300, 40];
var endpointDifference = [-80, -300, 400];

var currentStart = 0;

// var path;


function createImage(path) {
  entryCount += 1;
  displayCount += 1;
  var cursor = document.querySelector("#cursor");
  var img = document.createElement("img");
  img.className = "constellation";
  img.src = path;
  // cursor.parentNode.insertBefore(img, cursor);
  document.getElementById("container").appendChild(img);
  // img.style.marginTop = marginz + "px"; 
}

function deleteElement() {
  entryCount += 1;
  var letter = document.querySelector("#cursor").previousSibling;
  if (letter) {
    letter.remove();
    displayCount -= 1;
    if (displayCount < 0) {
      displayCount = 0;
    }
  }
}

document.onkeydown = function(e) {
  if (e.key.toLowerCase() == "a") { createImage("assets/A.svg"); }
  if (e.key.toLowerCase() == "b") { createImage("assets/B.svg"); }
  if (e.key.toLowerCase() == "c") { createImage("assets/C.svg"); }
  if (e.key.toLowerCase() == "d") { createImage("assets/D.svg"); }
  if (e.key.toLowerCase() == "e") { createImage("assets/E.svg"); }
  if (e.key.toLowerCase() == "f") { createImage("assets/F.svg"); }
  if (e.key.toLowerCase() == "g") { createImage("assets/G.svg"); }
  if (e.key.toLowerCase() == "h") { createImage("assets/H.svg"); }
  if (e.key.toLowerCase() == "i") { createImage("assets/I.svg"); }
  if (e.key.toLowerCase() == "j") { createImage("assets/J.svg"); }
  if (e.key.toLowerCase() == "k") { createImage("assets/K.svg"); }
  if (e.key.toLowerCase() == "l") { createImage("assets/L.svg"); }
  if (e.key.toLowerCase() == "m") { createImage("assets/M.svg"); }
  if (e.key.toLowerCase() == "n") { createImage("assets/N.svg"); }
  if (e.key.toLowerCase() == "o") { createImage("assets/O.svg"); }
  if (e.key.toLowerCase() == "p") { createImage("assets/P.svg"); }
  if (e.key.toLowerCase() == "q") { createImage("assets/Q.svg"); }
  if (e.key.toLowerCase() == "r") { createImage("assets/R.svg"); }
  if (e.key.toLowerCase() == "s") { createImage("assets/S.svg"); }
  if (e.key.toLowerCase() == "t") { createImage("assets/T.svg"); }
  if (e.key.toLowerCase() == "u") { createImage("assets/U.svg"); }
  if (e.key.toLowerCase() == "v") { createImage("assets/V.svg"); }
  if (e.key.toLowerCase() == "w") { createImage("assets/W.svg"); }
  if (e.key.toLowerCase() == "x") { createImage("assets/X.svg"); }
  if (e.key.toLowerCase() == "y") { createImage("assets/Y.svg"); }
  if (e.key.toLowerCase() == "z") { createImage("assets/Z.svg"); }

  // 0 means we picked G. because G is the first image.
  currentStart = currentStart + imageStarts[0] + endpointDifference[0];

  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  // if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
  //   createImage(e.key);
  // }
  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
};




// function storeCoordinate(xVal, yVal, array){
  // array.push({x:xVal, y: yVal});
// }

// var coordinates = [];
// storeCoordinate(0,0, 119.6, -38.4)  //A
// storeCoordinate(0,0, 114.3, -103.7) //B


// function dewete(){

// }


