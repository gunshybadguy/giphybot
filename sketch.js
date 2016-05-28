
var gif = []; 



var api = "http://api.giphy.com/v1/gifs/search?"; 
var apiKey = "&api_key=dc6zaTOxFJmzC";
var q = "&q=anna+kendrick"; 






function setup() {
  
  noCanvas(); 
  var url = api + apiKey + q; 

  loadJSON(url, gotData); 

 

} // setup


function draw(){

	// var anna = createImg(gif[6]);

}


function mousePressed(){

	createImg(gif[Math.floor(Math.random()*gif.length)], magic());

}

//Math.floor(Math.random()*gif.length)

function gotData(giphy) {
  
  for (var i=0; i < giphy.data.length; i++){

  	gif.push(giphy.data[i].images.original.url); 


  	// createImg(giphy.data[i].images.original.url);
  }

} // got data


function magic(){
	console.log("magic called");
}


