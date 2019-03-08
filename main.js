---
---
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
	unloadJS("price_script");
});


function render_data(data){
	//console.log(data.total_population);
	var data_string = "";
	data_string+=("<h1>"+" 1usd = "+data.rates.ZAR+"</h1>");
	infobox.insertAdjacentHTML('beforeend',data_string);

}

// function unloadJS(scriptName){
// //var head = document.getElementsByTagName(‘head’).item(0);
// var js = document.getElementById(scriptName);
// js.parentNode.removeChild(js);
//
// var myvar="{{site.baseurl}}";
// var _0x3f70=['insertAdjacentHTML','beforeend','getElementById','removeChild','info-box','addEventListener','load','open','https://api.exchangeratesapi.io/latest?base=USD','parse','responseText','log','send','<h1>','ZAR'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x3f70,0x15d));var _0x5746=function(_0x2d7e72,_0x68aaff){_0x2d7e72=_0x2d7e72-0x0;var _0x3d9b7e=_0x3f70[_0x2d7e72];return _0x3d9b7e;};var infobox=document['getElementById'](_0x5746('0x0'));var btn=document['getElementById']('loadButton');window[_0x5746('0x1')](_0x5746('0x2'),function(){var _0x5b3fb4=new XMLHttpRequest();_0x5b3fb4[_0x5746('0x3')]('GET',_0x5746('0x4'));_0x5b3fb4['onload']=function(){var _0x454566=JSON[_0x5746('0x5')](_0x5b3fb4[_0x5746('0x6')]);console[_0x5746('0x7')](_0x454566);render_data(_0x454566);};_0x5b3fb4[_0x5746('0x8')]();unloadJS('price_script');});function render_data(_0x4e8b9e){var _0x33e2ce='';_0x33e2ce+=_0x5746('0x9')+'\x201usd\x20=\x20'+_0x4e8b9e['rates'][_0x5746('0xa')]+'</h1>';infobox[_0x5746('0xb')](_0x5746('0xc'),_0x33e2ce);}function unloadJS(_0x8de949){var _0x40c588=document[_0x5746('0xd')](_0x8de949);_0x40c588['parentNode'][_0x5746('0xe')](_0x40c588);}
