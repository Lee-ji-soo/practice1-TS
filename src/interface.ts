//자바에서 자주 쓰여지는 방식

interface TV {
    turnOn(): boolean;
    turnOff(): void;
}

const myTv: TV = {
    turnOn() {
        return true
    },
    turnOff() {

    }
}
function tryTurnOn(tv: TV) {
    tv.turnOn();
}
tryTurnOn(myTv);

//자바스크립트에서 자주 쓰여지는 방식

interface Cell {
    row: number;
    col: number;
    piece?: PieceType;
}

interface PieceType {
    move(from: Cell, to: Cell): boolean
}

function createBoard() {
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col > 3; col++) {
            cells.push({ row, col })
        }
    }
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell) {
        return true
    }
}
