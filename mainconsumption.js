var infobox=document.getElementById("info-box");

function content_load(){
	console.log("hello");
	var OurRequest= new XMLHttpRequest();
	OurRequest.open("GET","https://script.google.com/macros/s/AKfycbyk7lEvp_IW0PBMLZ0iHE3Gkw05cYW65Bs-kcuyekkMOcjNFGM/exec/consumption");
	OurRequest.onload=function(){
		var ourData=JSON.parse(OurRequest.responseText);
		console.log(ourData);
		render_data(ourData);
		
	}
	OurRequest.send();
}


function render_data(data){
	console.log(data);
// 	var data_string = "";
// 	data_string+=("<h5>"+" Price- "+data.AAPL.price+"</h5>");
// 	infobox.insertAdjacentHTML('beforeend',data_string);
}


