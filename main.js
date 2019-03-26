---
---
var infobox=document.getElementById("info-box");
var btn=document.getElementById("loadButton");

window.addEventListener("load",function(){
	var OurRequest= new XMLHttpRequest();
	OurRequest.open("GET","https://script.google.com/macros/s/AKfycbyk7lEvp_IW0PBMLZ0iHE3Gkw05cYW65Bs-kcuyekkMOcjNFGM/exec?sort=country");
	OurRequest.onload=function(){
		var ourData=JSON.parse(OurRequest.responseText);
		console.log(ourData);
		render_data(ourData);
		
	}
	OurRequest.send();
	

});


function render_data(data){

	var data_string = "<table style='width:100%;text-align: left;'><tr><th>Country</th><th>lrpmg</th><th>Year</th></tr>";
	data_string+=("<tr><td>Austria</td><td>18.9999</td><td>1978</td><tr>");
	infobox.insertAdjacentHTML('beforeend',data_string+"</table>");

}
