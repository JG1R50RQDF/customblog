---
---
var infobox=document.getElementById("info-box");
var btn=document.getElementById("loadButton");

window.addEventListener("load",function(){
	var OurRequest= new XMLHttpRequest();
	OurRequest.open("GET","https://script.google.com/macros/s/AKfycbyk7lEvp_IW0PBMLZ0iHE3Gkw05cYW65Bs-kcuyekkMOcjNFGM/exec/consumption?callback=ctrlq");
	OurRequest.send();

});


function render_data(data){
	console.log(data);
	// var data_string = "";
	// data_string+=("<h1>"+" 1usd = "+data.rates.ZAR+"</h1>");
	// infobox.insertAdjacentHTML('beforeend',data_string);

}
  function ctrlq(e) {
    console.log(e.result)
  }

