---
---
var infobox=document.getElementById("info-box");
var btn=document.getElementById("loadButton");

window.addEventListener("load",function(){
	var OurRequest= new XMLHttpRequest();
	OurRequest.open("GET","https://script.google.com/macros/s/AKfycbyP5Rifn7Q05Qcd7CTfm-AOouFHHvUAvCVVuKSfQu-LCqJocP8/exec?key=abcdef");
	OurRequest.send();

});


function render_data(data){
	console.log(data);
	// var data_string = "";
	// data_string+=("<h1>"+" 1usd = "+data.rates.ZAR+"</h1>");
	// infobox.insertAdjacentHTML('beforeend',data_string);

}
