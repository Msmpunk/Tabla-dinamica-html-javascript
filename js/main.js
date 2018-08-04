
let table = [
  { nombre: 'MK', descargas: 10 },
  { nombre: 'PACMAN', descargas: 16 },
  { nombre: 'POKEMON', descargas: 18 },
  { nombre: 'DBZ', descargas: 17 }
]
let saveStatuss = true;

showTable();

function showTable() {
  let tbody = document.getElementById('games-table');
  let tableBody = ''
  if(table.length === 0){
    tableBody = `<tr>
                  <td></td>
                  <td class="color-empty">No hay Elementos En la lista</td>
                  <td></td>
                <tr>`
  }else{
    for (let i = 0; i < table.length; i++) {
      tableBody += `<tr id="tr-${i}">
                      <td id="td-n${i}">${table[i].nombre}</td>
                      <td id="td-d${i}">${table[i].descargas}</td>
                      <td><button class="btn-edit btn btn-secondary" value="${table[i].nombre}" onclick="editElment(this.value)">Editar</button></td>
                      <td><button class="btn-delete btn btn-secondary" value="${table[i].nombre}" onclick="deleteRow(this.value)">Eliminar</button></td>
                    <tr>`
    }
  }    
  tbody.innerHTML = tableBody
}

function newGame() {
  event.preventDefault();
  saveStatuss = true;
  let gameData = document.getElementById('game').value
  let downloadsData = document.getElementById('downloads').value

  const elementExist = existElment(gameData);

  if (!elementExist.status) {
    return alert('El nombre ya esta en la lista')
  }

  if (gameData === '' || downloadsData ==='') {
    alert('Por favor no dejes los campos vacios')
  } else {
    let newGame = {nombre: gameData, descargas: downloadsData}
    table.push(newGame)
    showTable();
  }
}

function existElment(value) {
  for (const i in table) {
    if (table[i].nombre === value) {
      return { status: false, position: i }
    }
  }
  return { status: true, position: null };
}

function deleteRow(row) {
  saveStatuss = true
  for (const i in table) {
    if (table[i].nombre === row) {
      table.splice(i, 1);
    }
  }
  showTable();
}

function editElment(value) {
  if (saveStatuss === true) {
    saveStatuss = false
    let place;
    let nameGame = value;
    let dowloads;
    for (const i in table) {
      if (table[i].nombre === nameGame) {
        place = i;
        dowloads = table[i].descargas;
      }
    }
    let trNum = document.getElementById(`tr-${place}`);
    
    let newTr = `<tr id="tr-${place}">
                  <td><input type="text" id="td-n${place}" value="${nameGame}"/></td>
                  <td><input type="text" id="td-d${place}" onkeypress="return number(event)" value="${dowloads}"/></td>
                  <td><button class="btn-save btn btn btn-primary" value="${place}" onclick="saveData(this.value)">Guardar</button></td>
                  <td><button class="btn-edit btn btn-secondary" disabled value="${nameGame}" onclick="editElment(this.value)">Editar</button></td>
                  <td><button class="btn-delete btn btn-secondary" disabled value="${nameGame}" onclick="deleteRow(this.value)">Eliminar</button></td>
                <tr>`;
  
    trNum.innerHTML = newTr;
  }

}

function saveData(place) {
  saveStatuss = true;
  let newName = document.getElementById(`td-n${place}`).value;
  let newNumDowloads = document.getElementById(`td-d${place}`).value;

  const elementExist = existElment(newName);

  if (newName === '' || newNumDowloads === '') {
    return alert('No puedes dejar los campos vacios')
  }

  if (elementExist.position === null) {
    table[place].nombre = newName;
    table[place].descargas = newNumDowloads;
    return showTable();
  }

  if (elementExist.position === place) {
    table[place].descargas = newNumDowloads;
    return showTable();
  }

  return alert('El nombre ya esta en la lista')
}

function number(e) {
   let charCode = (e.which) ? e.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
   return true;
}