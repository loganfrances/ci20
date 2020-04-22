
//reading the json file
var xmlhttp = new XMLHttpRequest();
var url = "datajson.txt";
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    //we do something here
    console.log(data);
        
    buildIndex(data) //little hiccup here, forgot to add this earlier and NOTHING  was showing.
    //so all this action happens on page load.
};
xmlhttp.open("GET", url, true);
xmlhttp.send();



var wall = document.createElement("div");
wall.classList.add('wall');
document.body.appendChild(wall)

//starting to build the index by going through each object in the array.
function buildIndex(data){
	for (i=0; i < data.length; i++){



		//to ask roon: parsing through data with multiple values?
		//ex: color, images

		var item = document.createElement("div");
		var piece = document.createElement("img")
		piece.src = data[i].img; //showing both images on index? or after clicking? or are they overlapped offset by a few pixels?
		// trying to stack them by creating a div for all of them.
		piece.classList.add('piece')
		item.appendChild(piece);
		item.classList.add('item')
		

		var piece2 = document.createElement("img");
		piece2.src = data[i].imgtwo;
		piece2.classList.add('support')
		item.appendChild(piece2)
		// item.style.top = Math.random()*100 + "vh";
		item.style.marginTop = Math.floor(Math.random()*200) + "px"
		item.style.marginLeft = Math.floor(Math.random()*5000) + "px"
		item.style.zIndex = Math.random()*5
		




		// item.style.top = works just as well with absolute positioning. try it later
		// item.style.padding = ???? 
		//make them be able to overlap, position absolute or relative,

		wall.appendChild(item);
		item.addEventListener('onmousedown', (event) =>{
		item.style.width = 600 + "px"
		});

	};
};
	





//issues: wall div is showing up to the right of header div, and won't change
//with positioning. not sure why. {FIXED ON CSS}
//thinking about positioning the items with math random, and worried about how overlapping
//and/or spacing will work. perhaps setting mathrandom with different bounds each time?
