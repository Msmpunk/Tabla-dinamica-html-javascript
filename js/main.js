
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
    tableBody += `<tr id="tr-${i}">
                    <td id="td-n${i}">${table[i].nombre}</td>
                    <td id="td-d${i}">${table[i].descargas}</td>
                    <td><button class="btn-edit btn btn-secondary" value="${table[i].nombre}" onclick="editElment(this.value)">Editar</button></td>
                    <td><button class="btn-delete btn btn-secondary" value="${table[i].nombre}" onclick="deleteRow(this.value)">Eliminar</button></td>
                  <tr>`
  }
  tbody.innerHTML = tableBody
}

function newGame() {
  event.preventDefault()
  var gameData = document.getElementById('game').value
  var downloadsData = document.getElementById('downloads').value

  const elementExist = existElment(gameData);

  console.log(elementExist);
  if (!elementExist) {
    return alert('El numero ya esta registrado')
  }

  if (gameData === '' || downloadsData ==='') {
    alert('Por favor no dejes los campos vacios')
  } else {
    var newGame = {nombre: gameData, descargas: downloadsData}
    table.push(newGame)
    showTable();
  }
}

function existElment(value) {
  for (const i in table) {
    if (table[i].nombre === value) {
      return false
    }
  }
  return true;
}

function deleteRow(row) {

  for (const i in table) {
    if (table[i].nombre === row) {
      table.splice(i, 1);
    }
  }
  showTable();
}

function editElment(value) {
  var place;
  var nameGame = value;
  var dowloads;
  for (const i in table) {
    if (table[i].nombre === nameGame) {
      place = i;
      dowloads = table[i].descargas;
    }
  }
  let trNum = document.getElementById(`tr-${place}`);
  
  var newTr = `<tr id="tr-${place}">
                <td><input type="text" id="td-n${place}" value="${nameGame}"/></td>
                <td><input type="text" id="td-d${place}" value="${dowloads}"/></td>
                <td><button class="btn-save btn btn btn-primary" value="${place}" onclick="saveData(this.value)">Guardar</button></td>
                <td><button class="btn-edit btn btn-secondary" disabled value="${nameGame}" onclick="editElment(this.value)">Editar</button></td>
                <td><button class="btn-delete btn btn-secondary" disabled value="${nameGame}" onclick="deleteRow(this.value)">Eliminar</button></td>
              <tr>`;

  trNum.innerHTML = newTr;
}

function saveData(place) {

  let newName = document.getElementById(`td-n${place}`).value;
  let newNumDowloads = document.getElementById(`td-d${place}`).value;


  if (newName === '' || newNumDowloads === '') {
    return alert('No puedes dejar los campos vacios')
  }

  table[place].nombre = newName;
  table[place].descargas = newNumDowloads;
  showTable();
}
