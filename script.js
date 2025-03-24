//your JS code here. If required.
const submitbtn=document.getElementById("submit");
const player1input=document.getElementById("player-1");
const player2input=document.getElementById("player-2");
const messagediv=document.querySelector('.message');
let currentplayer="x";
let player1="";
let player2="";
let gameboard=["","","","","","","","",""];
let gameactive=true;

submitbtn.addEventListener("click",() =>{
	player1=player1input.value;
	player2=player2input.value;
	if(player1 && player2)
	{
		messagediv.textContent=`${player1},you're up`;
		player1input.disabled=true;
		player2input.disabled=true;
		submitbtn.disabled=true;
	}
	else
	{
		messagediv.textContent="Enter names:";
	}
});

const cells = document.querySelectorAll('.cell');
cells.forEach(cell =>{
	cell.addEventListener("click",() =>{
	if(!player1 || !player2 || !gameactive || cell.textContent !== "")
		return;
		const cellid=parseInt(cell.id) -1;
		gameboard[cellid]=currentplayer;
		cell.textContent=currentplayer;

		if(checkWin())
		{
			messagediv.textContent=`${currentplayer === "x" ? player1:player2}
			congratulations you won!.`;
			gameactive false;
			return;
		}
		currentplayer = currentplayer === "x" ? "o" : "x";
        messagediv.textContent = `${currentplayer === "x" ? player1 : player2}, you're up`;
	});
});
