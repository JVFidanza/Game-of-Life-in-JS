let masterBody = document.getElementById('masterBody');
let gridSize = 25;

//Initiate cell matrix
let rows = new Array(gridSize);
rows.fill(false);
let gridMatrix = rows.map(x => [...rows]);
gridMatrix[3][9] = true;
//
console.log(gridMatrix);

//Initiate visual grid
renderGrid(gridMatrix);
function renderGrid(cellMatrix){
    let cell = document.createElement('div');
    cell.className = 'cell';
    masterBody.querySelectorAll('*').forEach(x => x.remove());
    cellMatrix.forEach((cellRow, iExt) => {
        try{
        let cellLine = document.createElement('div');
        cellLine.className = 'cellLine';
        cellRow.forEach((cellData, iInt) => {
            let cellUnit = cell.cloneNode();
            cellUnit.id = `cell[${iExt + 1}][${iInt + 1}]`;
            cellUnit.classList.add(cellData? 'aliveCell' : 'deadCell');
            cellLine.append(cellUnit);   
        });
        masterBody.append(cellLine);
    }
    catch{}
    });
}
//