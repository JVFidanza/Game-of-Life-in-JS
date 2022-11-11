let masterBody = document.getElementById('masterBody');
let gridSize = 25;


//Initiate grid
let cell = document.createElement('div');
cell.className = 'cell';
for (let iExt = 0; iExt < gridSize; iExt++) {
    let cellLine = document.createElement('div');
    cellLine.className = 'cellLine';
    for (let iInt = 0; iInt < gridSize; iInt++) {
        let cellUnit = cell.cloneNode();
        cellUnit.id = `cell[${iExt + 1}][${iInt + 1}]`;
        cellLine.append(cellUnit);        
    }
    masterBody.append(cellLine);
}
