const Player = (name) => {
    const greeting = () => console.log(`Hi ${name}! Are you ready to play?`);
    return { greeting }
}

const gameBoard = (function() {
    let boardStructure = [['','',''],
                ['','',''],
                ['','','']];

    let boardMarking = function () {
        let squares = document.querySelectorAll('.board-square');
        squares.forEach((square) => square.addEventListener('click', function() {
            const id = this.id;
            const row = Math.ceil(id/3)-1;
            let column = id;
            while (column > 3) {
                column -= 3;
            };
            column -= 1;
            boardStructure[row][column] = 'X';
            square.textContent = boardStructure[row][column];
        }));
    };

    return {
        boardMarking,
        boardStructure,
    };
})();
