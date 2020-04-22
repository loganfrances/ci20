var pages = ["home", "writings", "drawings", "sketchbook", "prints", "travel", 
"organizations", "contact", "links"];

console.log(pages);

for (var i = 0; i < pages.length; ){
	var a = document.createElement('a');
	a.setAttribute('href', pages[i] + ".html");
	a.innerHTML = "pages[i]";
	document.getElementById("#sidebar").appendChild(a);
};
                           