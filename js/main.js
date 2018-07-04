
var table = [
  {nombre: 'MK', descargas: 10},
  {nombre: 'PACMAn', descargas: 16},
  {nombre: 'POEMON', descargas: 18},
  {nombre: 'DBZ', descargas: 17}

]

// window.onload = cargarEventos

// function cargarEventos () {
//   document.getElementById('show-table').addEventListener('click', showTable, false);

//   document.getElementById('new-information').addEventListener('submit', newGame, false);

//   document.getElementById('new-information').addEventListener('submit', deleteRow, false)
// }

function showTable() {
  var tbody = document.getElementById('games-table');
  var tableBody = ''

  for (var i = 0; i < table.length; i++) {
    tableBody += `<tr>
                    <td id="td-name${i}">${table[i].nombre}</td>
                    <td id="td-dowloads${i}">${table[i].descargas}</td>
                    <td><button class="btn-edit btn btn-secondary">Editar</button></td>
                    <td><button class="btn-delete btn btn-secondary" value="${table[i].nombre}" onclick="deleteRow(this.value)">Eliminar</button></td>
                  <tr>`
  }
  tbody.innerHTML = tableBody
}

function newGame() {
  event.preventDefault()
  var gameData = document.getElementById('game').value
  var downloadsData = document.getElementById('downloads').value

  if (gameData === '' || downloadsData ==='') {
    alert('Por favor no dejes los campos vacios')
  } else {
    var newGame = {nombre: gameData, descargas: downloadsData}
    table.push(newGame)
    showTable();
  }
}


function deleteRow(row) {

  for (const i in table) {
    if (table[i].nombre === row) {
      table.splice(i, 1);
    }
  }
  showTable();
}
