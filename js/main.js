

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
	//--------Tomando el objeto 

	// tbody.innerHTML = "<tr><td>" + table[i].nombre + "</td><td>" + table[i].descargas + "</td><tr>";

	//--------Agregando mis datos 

	// tbody.innerHTML = "<tr><td>MK</><td>33</td></tr>";

	//--------Con un for

	for (var i = 0; i < table.length; i++) {
		fulltable += "<tr><td>" + table[i].nombre + "</td><td>" + table[i].descargas + "</td><tr>" + "<tr><td><button id="dalate-information" type="submit" class=" btn-option btn btn-secondary" > Eliminar </button> </td><tr>";
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