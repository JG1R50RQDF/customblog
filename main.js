var infobox=document.getElementById("info-box");
var btn=document.getElementById("loadButton");

btn.addEventListener("click",function(){
	var OurRequest= new XMLHttpRequest();
	OurRequest.open("GET","https://api.population.io/1.0/population/World/today-and-tomorrow/?format=json");
	OurRequest.onload=function(){
		var ourData=JSON.parse(OurRequest.responseText);
		//console.log(ourData);
		render_data(ourData);
		
	}
	OurRequest.send();
});


function render_data(data){
	console.log(data.total_population);
	var data_string = "";

	for (var i = 0; i<data.total_population.length; i++) {
		data_string+=("<h5>"+data.total_population[i].date+" - "+data.total_population[i].population+"</h5>");
	}
	infobox.insertAdjacentHTML('beforeend',data_string)

}


