

var table = [
	{nombre: "MK", descargas:10},
	{nombre: "PACMAn", descargas:16},
	{nombre: "POEMON", descargas:18},
	{nombre: "DBZ", descargas:17}

];


window.onload = cargarEventos;

function cargarEventos () {

	document.getElementById("show-table").addEventListener("click",showTable,false);

	document.getElementById("new-information").addEventListener("submit",newGame,false);
}

function showTable() {

	var tbody = document.getElementById("games-table");
	var fulltable = "";
	var openbtn_edit= "<button id='edit-information' type='submit' class= 'btn-edit btn btn-secondary' onclick= 'myFunction2(this)'>";
	var closebtn="</button>";
	var openbtn_delete= "<button id='delete-information' type='submit' class= 'btn-delete btn btn-secondary' onclick= 'myFunction(this)'>";

	//--------Tomando el objeto 

	// tbody.innerHTML = "<tr><td>" + table[i].nombre + "</td><td>" + table[i].descargas + "</td><tr>";

	//--------Agregando mis datos 

	// tbody.innerHTML = "<tr><td>MK</><td>33</td></tr>";

	//--------Con un for

	for (var i = 0; i < table.length; i++) {
		// fulltable += "<tr><td>" + table[i].nombre + "</td> <td>" + table[i].descargas + "</td> <tr>";
		fulltable += "<tr><td>" + table[i].nombre + "</td><td>" + table[i].descargas +"</td><td>" + openbtn_edit + 'Editar'+ closebtn + openbtn_delete + 'Eliminar' + closebtn + "</td><tr>"; 

	}
	
	tbody.innerHTML = fulltable;
}

function newGame(){
	event.preventDefault();
	// agregandolo manualmente

	// var newGame ={nombre: "DBsZ", descargas:15};
	var gameData=document.getElementById("game").value;
	var downloadsData=document.getElementById("downloads").value;

	var newGame ={nombre:gameData, descargas:downloadsData};

	table.push(newGame);

}

// function myFunction() {
// 	// alert("it");
//     document.getElementById("table").deleteRow(0);
// }

function myFunction(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


// function myFunction2(id){
// 	var row=document.getElementById("table");
// 	row.innerHTML='<td><input class="form-control placeholder-no-fix" type="text" autocomplete="off"></td>';
// }