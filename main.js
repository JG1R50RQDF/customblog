var infobox=document.getElementById("info-box");
var btn=document.getElementById("loadButton");

window.addEventListener("load",function(){
	var OurRequest= new XMLHttpRequest();
	OurRequest.open("GET","https://api.exchangeratesapi.io/latest?base=USD");
	OurRequest.onload=function(){
		var ourData=JSON.parse(OurRequest.responseText);
		console.log(ourData);
		render_data(ourData);
		
	}
	OurRequest.send();
});


function render_data(data){
	//console.log(data.total_population);
	var data_string = "";
	data_string+=("<h1>"+" 1usd = "+data.rates.ZAR+"</h1>");
	infobox.insertAdjacentHTML('beforeend',data_string);

}


