let move = "X";
let win=false;
const cellNames = ["1a", "1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"];
function cellClick (event) {
    console.log(event.target.id);
    const cell = document.getElementById(event.target.id);
    if (cell.textContent == ""&&!win) {
        cell.textContent = move;
        if (move == "X") {
            move = "O"
        } else {move = "X"}
        checkWinner();
    }
}

function checkWinner() {
    const cellState=[];
    for (let c of cellNames) {
        const cell = document.getElementById(c);
        cellState.push(cell.textContent);
    };
    const checks = [
        checkRow(cellState, 1),
        checkRow(cellState, 2),
        checkRow(cellState, 3),
        checkColumn(cellState, 1),
        checkColumn(cellState, 2),
        checkColumn(cellState, 3),
        checkDiagonal(cellState, 1),
        checkDiagonal(cellState, 2)
    ];

    for (let i of checks) {
        if (i=="X"||i=="O") {
            console.log("Выиграли "+i);
            const winnerInput = document.getElementById("Winner");
            winnerInput.value = "Выиграли "+i;
            win = true;
            break;
        } 
    }

    console.log(cellState);    
}

function checkCellsWinner(cellState, c1,c2,c3) {
    if (cellState[c1]==cellState[c2]&&cellState[c1]==cellState[c3]&&cellState[c1]!="") {
        return (cellState[c1]);
    } else return "";
}

function checkRow (cellState, rowNumber) {
    const c1 = (rowNumber-1)*3;
    const c2 = c1+1;
    const c3 = c1+2;
    return checkCellsWinner(cellState, c1, c2, c3);
}

function checkColumn (cellState, columnNumber) {
    const c1 = columnNumber-1;
    const c2 = c1+3;
    const c3 = c1+6;
    return checkCellsWinner(cellState, c1, c2, c3);
}

function checkDiagonal (cellState, diagonalNumber) {
    if (diagonalNumber ==1) {
        const c1 = 0;
        const c2 = 4;
        const c3 = 8;
        return checkCellsWinner(cellState, c1, c2, c3);
    }

    if (diagonalNumber ==2) {
        const c1 = 2;
        const c2 = 4;
        const c3 = 6;
        return checkCellsWinner(cellState, c1, c2, c3);
    }
}

function cleanTable (){
    for (let c of cellNames) cleanCell(c); 
    win=false;   
}

function cleanCell(cellName) {
    const cell = document.getElementById(cellName);
    cell.textContent = "";
    console.log(cellName.textContent);
    return cell;
}