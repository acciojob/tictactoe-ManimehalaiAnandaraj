//your JS code here. If required.
document.addEventListener("DOMContentLoaded",() =>
	{
const submitbtn=document.getElementById("submit");
const player1input=document.getElementById("player-1");
const player2input=document.getElementById("player-2");
const messagediv=document.querySelector('.message');
		const gamediv=document.getElementById('game');
		const boardcells=document.querySelectorAll('cell');
		let players=["player1","player2"];
let currentplayer="x";
let boardstate=["","","","","","","","",""];
let gameactive=false;

submitbtn.addEventListener("click",() =>{
	players=[player1input.value.trim() || "Player1",player2input.value.trim() || "Player2"];
	 gameDiv.style.display = "block";
        message.textContent = `${players[0]}, you're up!`;
        gameActive = true;

        // Reset board
        boardState.fill("");
        boardCells.forEach(cell => {
            cell.textContent = "";
        });

        currentPlayer = "x";  // Reset to first player
    });

    boardCells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            if (!gameActive || boardState[index] !== "") return;

            boardState[index] = currentPlayer;
            cell.textContent = currentPlayer;

            setTimeout(() => {
                if (checkWinner()) {
                    message.textContent = `${currentPlayer === "x" ? players[0] : players[1]} congratulations you won!`;
                    gameActive = false;
                    return;
                }

                currentPlayer = currentPlayer === "x" ? "o" : "x";
                message.textContent = `${currentPlayer === "x" ? players[0] : players[1]}, you're up!`;
            }, 50);
        });
    });

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
        });
    }
});