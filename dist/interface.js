//자바에서 자주 쓰여지는 방식
var myTv = {
    turnOn: function () {
        return true;
    },
    turnOff: function () {
    }
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTv);
function createBoard() {
    var cells = [];
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col > 3; col++) {
            cells.push({ row: row, col: col });
        }
    }
}
var board = createBoard();
board[0].piece = {
    move: function (from, to) {
        return true;
    }
};
//# sourceMappingURL=interface.js.map