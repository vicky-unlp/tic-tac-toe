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

    let gameMechanics = function () {
        let square = boardStructure;
        for (let i = 0; i <= 3; i++) {
            if (square[i][0] !== '' && square[i][0] === square[i][1] && square[i][1] === square[i][2]) {
                if (square[i][0] === 'X') {
                    console.log('You win!')
                } 
                else if (square[i][0] === 'O') {
                    console.log('Computer wins!')
                }
            } 
            else if (square[0][i] !== '' && square[0][i] === square[1][i] && square[1][i] === square[2][i]) {
                if (square[0][i] === 'X') {
                    console.log('You win!')
                } 
                else if (square[0][i] === 'O') {
                    console.log('Computer wins!')
                }
            } 
            else if (square[0][0] !== '' && square[0][0] === square[1][1] && square[1][1] === square[2][2]) {
                if (square[0][0] === 'X') {
                    console.log('You win!')
                } 
                else if (square[0][0] === 'O') {
                    console.log('Computer wins!')
                }
            }
            else if (square[0][2] !== '' && square[0][2] === square[1][1] && square[1][1] === square[2][0]) {
                if (square[0][2] === 'X') {
                    console.log('You win!')
                } 
                else if (square[0][2] === 'O') {
                    console.log('Computer wins!')
                }
            }
        }
        
    };

    return {
        boardMarking,
        boardStructure,
        gameMechanics
    };
})();
