var infobox=document.getElementById("info-box");
var btn=document.getElementById("load_button");

infobox.addEventListener("load",function(){
	var OurRequest= new XMLHttpRequest();
	OurRequest.open("GET","https://financialmodelingprep.com/api/company/price/AAPL");
	OurRequest.onload=function(){
		var ourData=JSON.parse(OurRequest.responseText);
		//console.log(ourData);
		render_data(ourData);
		
	}
	OurRequest.send();
});


function render_data(data){
	//console.log(data.total_population);
	var data_string = "";
	data_string+=("<h5>"+" Price- "+data.AAPL.price+"</h5>");
	infobox.insertAdjacentHTML('beforeend',data_string);

}


