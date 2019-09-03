
var pagination = 3;
var data = [{"brand":"Apple","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":699},{"brand":"HP","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":799},
					{"brand":"Apple","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":699},{"brand":"Apple","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":699},
					{"brand":"Acer","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":599},{"brand":"Acer","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":699},
					{"brand":"HP","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":899},{"brand":"HP","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":699},
					{"brand":"Apple","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":499},{"brand":"HP","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":699},
					{"brand":"Apple","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":699},{"brand":"Acer","cpu":"i7","hard":"1TB","ram":"4GB","color":"Black","price":399}];

function init() {
 
 loadTable(0, pagination)

 }

 function changePage(pageNo)
{

}

function loadTable(start, end) {

	var tableBodyStr="";

	for(var i = start; i < end; i++) {
		var obj = data[i];

		tableBodyStr+='<div class="column-3 cell-border">'+
		'<div class="box fill-blue">'+obj.brand+'</div>'+
		'</div>'+
		'<div class="column-3 cell-border">'+
		'<div class="box fill-blue">'+obj.cpu+'/'+obj.hard+'/'+obj.ram+'/'+obj.color+'</div>'+
		'</div>'+
		'<div class="column-3 cell-border">'+
		'<div class="box fill-blue"> $'+obj.price+'</div>'+						
		'</div>';
	}

	document.getElementsByClassName("table-content")[0].innerHTML = tableBodyStr;
}